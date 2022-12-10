function sort(obj) {
    let sortedObj = obj.sort((a,b)=>{
        return a.price - b.price;
    });
    return sortedObj;
}
console.log(sort([
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]));