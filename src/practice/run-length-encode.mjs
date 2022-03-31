function runLengthEncode(input) {
  let output = "";

  let lastChar = input[0];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (lastChar !== char) {
      output += `${count}${lastChar}`;
      lastChar = char;
      count = 0;
    }

    count++;
  }

  output += `${count}${lastChar}`;
  return output;
}

const input = "AAAABBBCCDAA";

console.log(runLengthEncode(input));
