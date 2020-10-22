function generateIntegers(m, n) {
    if (m === n) {
        return [m];
    }

    const nums = [];
    for (const i = m; i <= n; i++) {
        nums.push(i);
    }
    return nums;
}
