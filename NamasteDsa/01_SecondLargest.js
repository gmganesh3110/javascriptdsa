function secondLargest(arr) {

    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest && arr[i] !== largest) {
            second = largest;
            largest = arr[i];
        }
        if (arr[i] < largest && arr[i] > second && arr[i] !== second) {
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargest([1, 2, 3, 2, 44, 5, 5, 55, 4, 33, 2, 3]), "Second")