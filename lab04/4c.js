function palindrome(string) {


    var middle = Math.floor(string.length / 2);
    word = string.toLowerCase();
    for (var i = 0; i < middle; i++) {
        if (word[i] !== word[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome('UWu'))