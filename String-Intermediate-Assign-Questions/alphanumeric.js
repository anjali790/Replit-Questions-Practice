function alphanumeric(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            return true;
        } 
    }
    return false;
}
console.log(alphanumeric('aircampus'));