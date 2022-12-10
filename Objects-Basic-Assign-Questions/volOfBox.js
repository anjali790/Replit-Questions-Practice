function volumeOfBox(obj) {
    let volume = obj.height * obj.length * obj.width;

    return volume;
}
console.log(volumeOfBox({ width: 7, length: 2, height: 1 }));