function needsWantsSavings(salary) {
    let obj = {
        "Needs": 1 / 2 * salary,
        "Wants": 3 / 10 * salary,
        "Savings": 1 / 5 * salary
    }

    return obj;
}
console.log(needsWantsSavings(10000));