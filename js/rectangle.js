function calculate(){
    var calculate = document.getElementById("selectVol").value;
    var unit = document.getElementById("unit").value;
    var len = document.getElementById("enterLen").value;
    var bre = document.getElementById("enterBre").value;
    var result = document.getElementById("result");
    
 if(calculate == "perimeter"){
    var perimeter = 2*len+2*bre;
    
    // alert(perimeter)
    result.innerHTML =  `perimeter is ${perimeter} ${unit}`;
}

if(calculate == "area"){
    var area = len*bre;
    result.innerHTML =  `area is ${area} ${unit}<sup>2<sup>`;

}}