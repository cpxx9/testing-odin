function caesarCipher(string, key = 1) {
  const stringArr = Array.from(string);
  let newString = '';
  let shiftKey = key;
  stringArr.forEach((char, index) => {
    if (
      (char.charCodeAt() > 64 && char.charCodeAt() < 91) ||
      (char.charCodeAt() > 96 && char.charCodeAt() < 123)
    ) {
      newString += String.fromCharCode(char.charCodeAt() + shiftKey);
    } else {
      newString += char;
    }
  });
  return newString;
}

export default caesarCipher;
