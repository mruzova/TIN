function order(string) {
    let arr = string.split('');
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }
    return arr.join('')
}
console.log(order("banana"))