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

function nShops (name) {
    return Shops.filter(shop => shop.owner == name).length;
}


function nItems (name) {
    //Get all shops of this person
    let shops = Shops.filter(shop => shop.owner == name);
    //transform into shopIds
    let shopIds = shops.map(shop => shop.id);

    //Find all purchases made in those shopIds
    let purchases = Purchases.filter(callback);
    function callback (purchase) {
        return shopIds.includes(purchase.shopId);
    }

    let nItems = 0;
    for (let purchase of purchases) {
        nItems += purchase.itemIds.length;

    }
    return nItems;
}

function weight () {
    for (let purchase of Purchases) {
        purchase.totalWeight = purchaseWeight(purchase);
    }
    let maxWeight = 0;
    for (let purchase of Purchases) {
        if (purchase.totalWeight > maxWeight) {
            maxWeight = purchase.totalWeight;
        }
    }
    return maxWeight;
}

function purchaseWeight (purchase) {
    let weight = 0;
    for (let itemId of purchase.itemId) {
        let item = items.find(item => item.id == itemId);
        weight += item.weight;
    }
    return weight;
}

function weightBangkok () {
    let shops = Shops.filter(shop => shop.city == "Bangkok");
    let shopIds = Shops.map(shop => shop.id);
    let purchases = Purchases.filter(purchase => shopIds.includes(purchase.shopId));

    let weight = [];
}