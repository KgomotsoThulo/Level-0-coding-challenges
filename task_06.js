function maximum() {
  var  highest = arguments[i];
for (var i =0; i < arguments.length; i++){
    
  if(arguments[i+1] > arguments[i])
  {
      highest = arguments[i+1];
  }
  else
  {
      continue;
  }
}

console.log(highest);
    
}

maximum(1,22,3,2);