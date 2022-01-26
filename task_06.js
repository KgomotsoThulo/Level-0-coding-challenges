function maximum() {
  let highest = -Infinity;
  for (let i = 0; i <= arguments.length; i++) {
    if (arguments[i] > highest) {
      highest = arguments[i];
    }
  }

  return highest;
}

console.log(maximum(3, -34, -2, -1));
