function ingredients(obj) {
    let arr = Object.values(obj)

    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(ingredients({
    "salt": 23,
    "oil": 12,
    "ketchup": 10
}));