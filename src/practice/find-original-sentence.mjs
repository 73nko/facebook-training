function findOriginal(words = [], str = "") {
  const output = [];

  let window = "";
  for (let i = 0; i < str.length; i++) {
    window += str[i];

    if (words.includes(window)) {
      output.push(window);
      window = "";
    }
  }
  return output;
}

const string1 = "thequickbrownfox";
const words1 = ["quick", "brown", "the", "fox"];

console.log(findOriginal(words1, string1));

const string2 = "bedbathandbeyond";
const words2 = ["bed", "bath", "bedbath", "and", "beyond"];

console.log(findOriginal(words2, string2));
