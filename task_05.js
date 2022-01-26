function areaOfTriangle(side1, side2, side3) {
  let semiP = 0;
  let area = 0;
  semiP = 0.5 * (side1 + side2 + side3); //semiperimeter

  area = Math.sqrt(semiP * (semiP - side1) * (semiP - side2) * (semiP - side3));

  return area;
}

console.log(areaOfTriangle(3, 4, 5));
