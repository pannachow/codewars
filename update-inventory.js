function updateInventory(curStock, newStock) {
    // merge stocks using an object
    const updatedStockMap = {};
    for (const [quantity, product] of curStock.concat(newStock)) {
        if (updatedStockMap[product]) {
            updatedStockMap[product] += quantity;
        } else {
            updatedStockMap[product] = quantity;
        }
    }

    // turn object into and array; swap product and quantity
    const updatedStock = [];
    for ([product, quantity] of Object.entries(updatedStockMap)) {
        updatedStock.push([quantity, product]);
    }

    // sort by product
    updatedStock.sort(([_q1, p1], [_q2, p2]) => p1.localeCompare(p2));
    return updatedStock;
}
