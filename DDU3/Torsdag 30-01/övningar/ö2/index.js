function findAmountOfShops (name) {
    let filteredArray = Shops.filter(x => x.owner == name)

    return filteredArray.length;
}

function amountOfPurchases (name) {
    let totalPurchases = 0;
    let filteredShops = Shops.filter(x => x.owner == name);
    for (let shop of filteredShops) {
        for (let purchase of Purchases) {
            if (shop.id == purchase.shopId) totalPurchases += purchase.itemIds.length
        }
    }
    return totalPurchases
}

function heaviestPurchase () {

}