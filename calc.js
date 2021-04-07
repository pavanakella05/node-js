function add(a, b) {
    return a + b;
}

exports.add = add;

exports.diff = function (a, b) {
    return a > b ? a - b : b - a;
}
