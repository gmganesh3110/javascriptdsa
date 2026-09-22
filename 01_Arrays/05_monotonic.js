const checkMonotonic = function (array){
 if (array.length === 0 ) return true;
  let first = array[0];
  let last = array[array.length - 1];
  for (let i = 0; i < array.length-1; i++) {
    if (first === last) {
      if (array[i] !== array[i + 1]) return false;
    }
    else if (first > last) {
      if (array[i] <= array[i + 1]) return false;
    } else {
      if (array[i] >= array[i + 1]) return false;
    }
  }
  return true;
}

