function getCount(str) {
    let vowelsCount = 0;

    const chars = str.split("");

    for (const ch of chars) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            vowelsCount++;
        }
    }

    return vowelsCount;
}
