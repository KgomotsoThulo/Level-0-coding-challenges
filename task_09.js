function vowelsInString(inputString) {
 var temp = "";
 temp = inputString;
 temp = temp.toLowerCase();
var bagOfVowels = "";
 for (var i = 0; i < temp.length; i++){
     
   if(temp[i] == "i" || temp[i] == "a" || temp[i] == "e" || temp[i] == "o" || temp[i] == "u"){
       bagOfVowels = bagOfVowels + temp[i] +", ";
   }
   else{
       continue;
   }

 }


  pos = bagOfVowels.lastIndexOf(',');
  bagOfVowels = bagOfVowels.substring(0,pos); //removes last comma
   console.log("Vowels: " +bagOfVowels);
  
}

vowelsInString("Umuzi");