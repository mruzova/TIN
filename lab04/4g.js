function defineType(arg) {
    return (Array.isArray(arg)) ? "array" : typeof arg;
}
var arr = [1, 2, 3, 4];


console.log(defineType(arr));