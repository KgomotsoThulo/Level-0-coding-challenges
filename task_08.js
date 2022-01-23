function numberToTime(number) {
   var hours = Math.floor(number / 60);
   var minutes = number % 60;
   console.log(hours + " hour(s), " + minutes + " minute(s)");
    

}

numberToTime(133);