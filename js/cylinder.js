function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var rad = document.getElementById("enterRad").value;
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
    var area = 2*Math.PI*rad*hei + 2*Math.PI*rad*rad;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;
}
if(calculate == "areac"){
    var areac = 2*Math.PI*rad*hei;
    result.innerHTML =  `area is ${areac} ${unit}<sup>2<sup>`;
}
if(calculate == "volume"){
    var volume = Math.PI*rad*rad*hei;
    var litre = volume*1000/Math.pow(convert,3);
    result.innerHTML =  `Volume is ${volume} ${unit}<sup>3<sup><br><h2>You Can store ${litre} litre water in it.<h2>`;
}
}