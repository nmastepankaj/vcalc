function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var side = document.getElementById("enterSide").value;
    var result = document.getElementById("result");
    
 if(calculate == "perimeter"){
    var perimeter = 4*side;
    // alert(perimeter)
    result.innerHTML =  `perimeter is ${perimeter} ${unit}`;
}

if(calculate == "area"){
    var area = side*side;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;

}}