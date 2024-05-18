function analyzeArray(arr) {
  const sortedArr = arr.sort();
  const arrInfo = {
    average: sortedArr[Math.floor(sortedArr.length / 2)],
    length: sortedArr.length,
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
  };

  return arrInfo;
}

export default analyzeArray;
