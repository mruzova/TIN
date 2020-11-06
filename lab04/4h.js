function findSecondNumbers(arr) {
    let temp;
    let uniqueArr = Array.from(new Set(arr));
    for (let i = 0; i < uniqueArr.length; i++) {
        for (let j = i + 1; j < uniqueArr.length; j++) {
            if (uniqueArr[i] > uniqueArr[j]) {
                temp = uniqueArr[i];
                uniqueArr[i] = uniqueArr[j];
                uniqueArr[j] = temp;
            }
        }
    }

    return uniqueArr[1] + "; " + uniqueArr[uniqueArr.length - 2];
}
var array = [10, 13, 199, 21, 0, 11, -11, 0, 0, 0, 0, 0, -10];
console.log(findSecondNumbers(array));