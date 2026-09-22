const arr = [-3, -2, -1, 0, 5];

function sortedSquarredArray2(array) {
  let result = new Array(array.length).fill(0);
  let start = 0;
  let end = array.length - 1;
  let eleIndex = array.length - 1;
  while (start <= end) {
    if (array[start] ** 2 < array[end] ** 2) {
      result[eleIndex] = array[end] ** 2;
      end--;
      eleIndex--;
    } else {
      result[eleIndex] = array[start] ** 2;
      start++;
      eleIndex--;
    }
  }
  return result;
}

console.log(sortedSquarredArray2(arr));
