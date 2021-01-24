function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var radius = document.getElementById("enterRad").value;
    var result = document.getElementById("result");
    
 if(calculate == "perimeter"){
    var perimeter = 2*Math.PI*radius;
    // alert(perimeter)
    result.innerHTML =  `perimeter is ${perimeter} ${unit}`;
}

if(calculate == "area"){
    var area = Math.PI*radius*radius;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;

}}