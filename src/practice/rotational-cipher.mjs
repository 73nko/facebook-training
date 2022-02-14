// Add any extra import statements you may need here
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Add any helper functions you may need here

const isNum = (char) => char.match(/^\d/) !== null;
const isAlpha = (char) => char.match(/^[a-z]$/i) !== null;

export function rotationalCipher(input, rotationFactor) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    let newValue = char;
    if (isNum(char)) {
      newValue = (+char + rotationFactor) % 10;
    } else if (isAlpha(char)) {
      const index = alphabet.indexOf(char.toLowerCase());
      newValue = alphabet[(index + rotationFactor) % 26];
      if (char.toUpperCase() === char) {
        newValue = newValue.toUpperCase();
      }
    }

    output.push(newValue);
  }
  return output.join("");
}
