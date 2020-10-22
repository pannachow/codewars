function findOdd(numbers) {
    for (const number1 of numbers) {
        let count = 0;
        for (const number2 of numbers) {
            if (number2 === number1) {
                count++;
            }
        }
        if (count % 2 === 1) {
            return number1;
        }
    }
}
