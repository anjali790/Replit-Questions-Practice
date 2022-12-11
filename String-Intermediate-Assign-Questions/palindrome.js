function palindrome(str) {
    let sting = str.split('').reverse().join('')
    if (str == sting) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('arork'));