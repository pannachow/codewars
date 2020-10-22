function reverse(str) {
    const words = str.split(" ");
    const result = [];

    for (const i = 0; i < words.length; i++) {
        if (words[i].length === 0) {
            continue;
        }
        if (i % 2) {
            words[i] = words[i].split("").reverse().join("");
        } else {
            result.push(words[i])
        }
    }
    return words.join(" ").trim();
}