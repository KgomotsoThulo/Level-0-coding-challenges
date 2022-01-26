function vowelsInString(inputString) {
  let temp = "";
  temp = inputString;
  temp = temp.toLowerCase();
  let bagOfVowels = "";
  for (let i = 0; i < temp.length; i++) {
    if (
      temp[i] == "i" ||
      temp[i] == "a" ||
      temp[i] == "e" ||
      temp[i] == "o" ||
      temp[i] == "u"
    ) {
      bagOfVowels = bagOfVowels + temp[i]; // + ", ";
    } else {
      continue;
    }
  }

  bagOfVowels = removeDuplicate(bagOfVowels);
  temp = bagOfVowels;
  bagOfVowels = "";

  for (let j = 0; j < temp.length; j++) {
    bagOfVowels = bagOfVowels + temp[j] + ", ";
  }

  pos = bagOfVowels.lastIndexOf(",");
  bagOfVowels = bagOfVowels.substring(0, pos); //removes last comma
  bagOfVowels = "Vowels: " + bagOfVowels;

  return bagOfVowels;
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

console.log(vowelsInString("Uumuziaaoo"));
