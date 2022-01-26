function numberToTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  let time = "";
  time = hours + " hours, " + minutes + " minutes.";

  return time;
}

console.log(numberToTime(0));
