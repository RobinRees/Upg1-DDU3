class Item {

  static get allBeans () {
    return Item.all.filter(item => {
      return item.isBeans;
    });
  }

  get isBeans () {
    return this.type != undefined;
  }


  get pricePerKg () {
    return 1000 * this.price / this.weight;
  }

  static moreExpensiveThan (ppk) {
    return Item.all.filter(item => {
      return item.pricePerKg > ppk;
    })
  }

  static all = []
  constructor(name, price, weight, quantity) {
    Item.all.push(this);
    this.name = name;
    this.price = price;
    this.weight = weight;     // in grams
    this.quantity = quantity; // Hur många finns det i affären
  }
}

class VegetarianItem extends Item {
  constructor(name, price, weight, quantity, isEco) {
    super(name, price, weight, quantity);
    this.isEco = isEco;
  }
}

class Fruit extends VegetarianItem {  
  constructor(name, price, weight, quantity, isEco, color) {
    super(name, price, weight, quantity, isEco);
    this.color = color;
  }
}

class Beans extends VegetarianItem {
  constructor(name, price, weight, quantity, isEco, type) {
    super(name, price, weight, quantity, isEco);
    this.type = type; // vilken typ av bönor det handlar om
  }
}
