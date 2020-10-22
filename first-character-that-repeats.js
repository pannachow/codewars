function firstDup(str) {
    for (const i = 0; i < str.length - 1; i++) {
        if (str.includes(str[i], i + 1)) {
            return str[i];
        }
    }
    return undefined;
}
