module.exports.stringSort = (_a,_b,prop) => {
    const a = _a[prop].toLowerCase();
    const b = _b[prop].toLowerCase();

    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}