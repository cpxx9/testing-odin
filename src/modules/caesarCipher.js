function caesarCipher(string, key = 1) {
  const stringArr = Array.from(string);
  let newString = '';
  stringArr.forEach((char, index) => {
    newString += String.fromCharCode(char.charCodeAt() + key);
  });
  return newString;
}

export default caesarCipher;
