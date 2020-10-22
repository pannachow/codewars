function looseChange(cents) {
    let pennies = 0;
    let nickels = 0;
    let dimes = 0;
    let quarters = 0;

    while (cents >= 25) {
        quarters += 1;
        cents -= 25;
    }
    while (cents >= 10) {
        dimes += 1;
        cents -= 10;
    }
    while (cents >= 5) {
        nickels += 1;
        cents -= 5;
    }
    while (cents >= 1) {
        pennies += 1;
        cents -= 1;
    }
    return {
        Nickels: nickels,
        Pennies: pennies,
        Dimes: dimes,
        Quarters: quarters
    };
}
