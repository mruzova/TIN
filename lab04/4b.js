function fibonacci(n) {
    if (n < 0) {
        return 'only non-negative numbers'
    }
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(11));