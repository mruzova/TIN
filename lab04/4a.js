var f_recursion = function(number) {
    if (number < 0) {
        return 'only non-negative numbers';
    } else if (number == 0) {
        return 1;
    } else {
        return (number * f_recursion(number - 1));
    }
}
console.log('using recursion: ' + f_recursion(1));

function f_iteration(number) {
    var fact = 1;
    var n;
    if (number < 0) {
        return 'only non-negative numbers';
    }
    for (n = number; n > 1; n--) {
        fact *= n;
    }
    return fact;
};
console.log('using iteration: ' + f_iteration(3));