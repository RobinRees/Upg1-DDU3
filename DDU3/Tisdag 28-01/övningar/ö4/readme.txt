

Vi har följande klass:

class Product {
    static all = [];
    constructor () {
        Product.all.push(this);
    }
    get index() {
        return Product.all.indexOf(this);
    }
}

// Exempel:
const p1 = new Product();
const p2 = new Product();
const p3 = new Product();

console.log(p1.index); // 0
console.log(p2.index); // 1
console.log(p3.index); // 2

Ändra eller lägg till kod så att instanserna av Product har en getter "index" som ger instansens index i arrayen Product.all
