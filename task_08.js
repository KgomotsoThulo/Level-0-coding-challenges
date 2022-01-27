function numberToTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  let time = "";

  if (hours >= 2) {
    hours = hours + " hours, ";
  } else {
    hours = hours + " hour, ";
  }
  ////
  if (minutes >= 2) {
    minutes = minutes + " minutes.";
  } else {
    minutes = minutes + " minute.";
  }

  time = hours + minutes;

  return time;
}

console.log(numberToTime(121));
