function evenOrOdd(number) {
  let response = "";
  if (number % 2 == 0) {
    response = "Number is even";
  } else {
    response = "Number is odd";
  }

  console.log(response);
}

evenOrOdd(3);
