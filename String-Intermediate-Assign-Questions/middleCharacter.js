function middleChar(str) {
    let position, length;
    if (str.length % 2 == 1) {
        position = Math.floor(str.length / 2);
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }
    return str.slice(position, position + length)
}
console.log(middleChar('testing'))