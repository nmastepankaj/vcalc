function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var len = document.getElementById("enterLen").value;
    var bre = document.getElementById("enterBre").value;
    var hei = document.getElementById("enterHei").value;
    var result = document.getElementById("result");
    if(unit== "m"){
        convert = 1;
    }else if(unit== "mm"){
        convert = 1000;
    }else if(unit== "ft"){
        convert = 3.28;
    }
if(calculate == "area"){
    var area = 2*len*bre +  2*len*hei + 2*bre*hei;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;
}
if(calculate == "volume"){
    var volume = len*bre*hei;
    var litre = volume*1000/Math.pow(convert,3);
    result.innerHTML =  `Volume is ${volume} ${unit}<sup>3<sup><br><h2>You Can store ${litre} litre water in it.<h2>`;
}
}