function shopping(obj) {
    let arr = Object.keys(obj);
    return arr;
}
console.log(shopping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))