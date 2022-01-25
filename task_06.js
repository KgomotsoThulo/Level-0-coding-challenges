function maximum() {
  var  highest = -Infinity;
for (var i =0; i <= arguments.length; i++){
 
  if(arguments[i] > highest)
  {
     var highest = arguments[i];
      
  }
}

console.log(highest);
    
}

maximum(-34,-2);