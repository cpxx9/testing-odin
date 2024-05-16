function reverseString(string) {
  let newString = '';
  let stringArr = Array.from(string);
  for (let i = 0; i < string.length; i += 1) {
    newString += stringArr.pop();
  }
  return newString;
}

export default reverseString;
