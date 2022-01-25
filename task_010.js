function commonCharacters(inputString1, inputString2) {
    inputString1 = inputString1.toLowerCase();
    inputString2 = inputString2.toLowerCase();
    var temp1 = " ";
     temp1 = inputString1;
     var temp2 = " ";
     temp2 = inputString2;


     var bagOfAlphabets = "";
    for (var i =0; i<inputString1.length; i++){

        for (var j = 0; j <inputString2.length;j++){
            if(inputString1[i] == inputString2[j]){
                //add letter to bag of alphabets
                bagOfAlphabets = bagOfAlphabets + inputString2[j] +", ";
            }
            else{
                continue;
            }

        }
    }
    pos = bagOfAlphabets.lastIndexOf(',');
    bagOfAlphabets = bagOfAlphabets.substring(0,pos); //removes last comma
    bagOfAlphabets = bagOfAlphabets.substring()
    console.log("Common letters: " + bagOfAlphabets);
   

}

commonCharacters("housE","cOmpUters");