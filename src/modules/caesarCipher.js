function caesarCipher(string) {
  const stringArr = Array.from(string);
  let newString = '';
  stringArr.forEach((char, index) => {
    newString += String.fromCharCode(char.charCodeAt() + 1);
  });
  return newString;
}

export default caesarCipher;
