function countShopsByOwner(ownerName) {
    return Shops.filter(shop => shop.owner === ownerName).length;
};

function countItemsSoldByOwner(ownerName) {
    const ownedShops = Shops.filter(shop => shop.owner === ownerName);
    console.log("Steg 1 - Ägda shops", ownedShops);


    const ownedShopIds = ownedShops.map(shop => shop.id);
    console.log("Steg 2 - Ägda Shop IDs", ownedShopIds);

    const relevantPurchases = Purchases.filter(purchase => ownedShopIds.includes(purchase.shopId));
    console.log("Steg 3 - Relevanta purchases", relevantPurchases);

    let totalItemsSold = 0;
    for (let i = 0; i < relevantPurchases.length; i++) {
        totalItemsSold += relevantPurchases[i].itemIds.length;
    }
    console.log("Steg 4 - Totalt antal sålda varor", totalItemsSold);
    return totalItemsSold;
}

function heaviestPurchaseWeight() {
    let maxWeight = 0;

    for (let i = 0; i < Purchases.length; i++) {
        let currentWeight = 0;

        for (let j = 0; j < Purchase[i].itemIds.length; j++) {
            let itemId = Purchases[i].itemIds[j];

            let item = Items.find(it => it.id === itemId);
            if (item) {
                currentWeight += item.weight;
            }
        }

        if (currentWeight > maxWeight) {
            maxWeight = currentWeight;
        }
    }
    return maxWeight;
}

//Koda en funktion som returnerar den totala vikten av köpet (purchase) som vägde tyngst och som gjordes i Bangkok.

function heaviesPurchaseInBangkok() {
    const bangkokShopIds = [];
    for (let i = 0; i < Shops.length; i++) {
        if (Shops[i].city === "Bangkok") {
            bangkokShopIds.push(Shops[i].id);
        }
    }

    let maxWeight = 0; 

    for (let i = 0; i < Purchases.length; i++) {
        if (bangkokShopIds.includes(Purchases[i].shopId)) {
            let currentWeight = 0; 


            for (let j = 0; j < Purchases[i].itemIds.length; j++) {
                let itemId = Purchases[i].itemIds[j];

                for (let k = 0; k < Items.length; k++) {
                    if (Items[k].id === itemId) {
                        currentWeight += Items[k].weight;
                        break
                    }
                }
            }

            if (currentWeight > maxWeight) {
                maxWeight = currentWeight;
            }
        }
        


    }

    return maxWeight;
}