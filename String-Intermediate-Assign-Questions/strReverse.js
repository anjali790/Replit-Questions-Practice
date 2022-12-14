function stringReverse(str) {
    let strReverse = str.split(' ').reverse().join(' ')
    return strReverse
}
console.log(stringReverse('the sky is blue'));