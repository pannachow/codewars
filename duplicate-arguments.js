function solution() {
    for (const i = 0; i < arguments.length; i++) {
        for (const j = 0; j < arguments.length; j++) {
            if (j === i) {
                continue;
            }
            if (arguments[j] === arguments[i]) {
                return true;
            }
        }
    }
    return false;
}
