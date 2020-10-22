function alphabetPosition(text) {
    const result = [];
    text = text.toUpperCase();

    for (const i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code > 64 && code < 91) {
            result.push(code - 64);
        }
    }

    return result.join(" ");
}
