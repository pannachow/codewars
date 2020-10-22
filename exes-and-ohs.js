function XO(str) {
    let x = 0;
    let o = 0;
    for (const i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char === 'x') {
            x++;
        } else if (char === 'o') {
            o++;
        }
    }
    return x === o;
}
