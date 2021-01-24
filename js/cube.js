function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var side = document.getElementById("enterSide").value;
    var result = document.getElementById("result");
    if(unit== "m"){
        convert = 1;
    }else if(unit== "mm"){
        convert = 1000;
    }else if(unit== "ft"){
        convert = 3.28;
    }
if(calculate == "area"){
    var area = 6*side*side;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;
}
if(calculate == "area4"){
    var area4 = 4*side*side;
    result.innerHTML =  `area is ${area4} ${unit}<sup>2<sup>`;
}
if(calculate == "area5"){
    var area5 = 5*side*side;
    result.innerHTML =  `area is ${area5} ${unit}<sup>2<sup>`;
}
if(calculate == "volume"){
    var volume = side*side*side;
    var litre = volume*1000/Math.pow(convert,3);
    result.innerHTML =  `Volume is ${volume} ${unit}<sup>3<sup><br><h2>You Can store ${litre} litre water in it.<h2>`;
}
}