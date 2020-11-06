function moneyToCoins(amount, coins) {
    let arr = coins.sort(function(a, b) { return b - a });
    let result = [];
    if (amount === 0) {
        return [];
    } else {
        if (amount >= arr[0]) {
            amount = (amount - arr[0]);
            result = [arr[0]].concat(moneyToCoins(amount, arr));
            return result;

        } else {
            arr.shift();
            return moneyToCoins(amount, arr);
        }
    }
}
console.log(moneyToCoins(46, [2, 10, 5, 25, 1]));