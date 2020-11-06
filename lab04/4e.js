function findLongest(string) {

    var arr = string.replace(/([^A-Z a-z])+/g, '').split(' ');
    let longestWord = '';
    let lengthOfLongest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lengthOfLongest) {
            lengthOfLongest = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log(findLongest('i like cats THEY are super cool!'))