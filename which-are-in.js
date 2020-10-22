function inArray(array1, array2) {
    const result = [];
    for (const word1 of array1) {
        for (const word2 of array2) {
            if (word2.includes(word1)) {
                result.push(word1);
                break;
            }
        }
    }
    return result.sort();
}
