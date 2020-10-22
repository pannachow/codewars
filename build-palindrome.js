function buildPalindrome(str) {
    for (const i = 0; i < str.length; i++) {
        const substr = str.substring(i);
        if (isPalindrome(substr)) {
            const prefix = str.substring(0, i);
            return str + reverse(prefix);
        }
    }
}

function isPalindrome(str) {
    const reStr = reverse(str);
    return str === reStr;
}

function reverse(str) {
    return str.split("").reverse().join("");
}
