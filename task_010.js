function commonCharacters(inputString1, inputString2) {
     var temp1 = "";
     temp1 = inputString1;
     temp1 = temp1.toLowerCase();
     var temp2 = "";
     temp2 = inputString2;
     temp2= temp2.toLowerCase();


     var bagOfAlphabets = "";
    for (var i =0; i<inputString1.length; i++){

        for (var j = 0; j <inputString2.length;j++){
            if(inputString1[i] == inputString2[j]){
                //add letter to bag of alphabets
                bagOfAlphabets = bagOfAlphabets + inputString2[j] +" ";
            }
            else{
                continue;
            }

        }
    }
    bagOfAlphabets = bagOfAlphabets.substring()
    console.log("Common letters: " + bagOfAlphabets);
   

}

commonCharacters("house","computers");