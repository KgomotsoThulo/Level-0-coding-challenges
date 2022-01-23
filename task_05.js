function areaOfTriangle(side1, side2, side3){
    
 var semiP = 0;
 var area = 0;
 semiP = 0.5 * (side1 + side2 + side3); //semiperimeter 
 
 area = Math.sqrt(semiP * (semiP-side1) * (semiP-side2) * (semiP-side3));

 console.log(area);





}

areaOfTriangle(3,4,5);