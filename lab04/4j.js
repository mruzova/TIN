function binarySearch(array, number) {
    arr = array.sort();
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === number) {
            return true;
        } else if (arr[mid] < number) {
            left = mid + 1;
        } else
            right = mid - 1;
    }

    return false;
}
var array = [3, 1, 5, 8, 2, 1, 0];
console.log(binarySearch(array, 1)); 