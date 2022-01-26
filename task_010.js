function commonCharacters(inputString1, inputString2) {
  inputString1 = inputString1.toLowerCase();
  inputString2 = inputString2.toLowerCase();
  let temp1 = " ";
  temp1 = inputString1;
  let temp2 = " ";
  temp2 = inputString2;
  let temp = "";

  let bagOfAlphabets = "";
  for (let i = 0; i < inputString1.length; i++) {
    for (let j = 0; j < inputString2.length; j++) {
      if (inputString1[i] == inputString2[j]) {
        //add letter to bag of alphabets
        bagOfAlphabets = bagOfAlphabets + inputString2[j];
      } else {
        continue;
      }
    }
  }

  bagOfAlphabets = removeDuplicate(bagOfAlphabets);
  temp = bagOfAlphabets;
  bagOfAlphabets = "";

  for (let j = 0; j < temp.length; j++) {
    bagOfAlphabets = bagOfAlphabets + temp[j] + ", ";
  }

  let pos = bagOfAlphabets.lastIndexOf(",");
  bagOfAlphabets = bagOfAlphabets.substring(0, pos); //removes last comma
  bagOfAlphabets = bagOfAlphabets.substring();
  bagOfAlphabets = "Common letters: " + bagOfAlphabets;

  return bagOfAlphabets;
}

function removeDuplicate(string) {
  // function to remove duplicates
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

console.log(commonCharacters("housE", "cOmpUterS"));
