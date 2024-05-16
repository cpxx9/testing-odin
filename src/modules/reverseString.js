function reverseString(string) {
  let newString = '';
  let stringArr = Array.from(string);
  for (let i = 0; i < stringArr.length; i += 1) {
    newString += stringArr.pop();
  }
}

export default reverseString;
