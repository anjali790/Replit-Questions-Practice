function freeDilivery(obj) {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(freeDilivery({ "Shampoo": 50.99, "Rubber Ducks": 15.99 }))