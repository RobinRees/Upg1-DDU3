class Dog {

  static breeds (region) {
    let breedsInRegion = [];
    for (let dog of Dog.all) {
      let owner = Owner.all.find(owner => owner.dogIds.includes(dog.id));
      if (region === owner.region) {
        if (!breedsInRegion.includes(dog.breed)) {
          breedsInRegion.push(dog.breed);
        }
      }
      let data = [];
      for (breed of breedsInRegion) {
        let nDogsAlive = Dog.all.filter(dog => {
          let breedOk = dog.breed === breed;
          let owner = Owner.all.find(owner => owner.dogIds.includes(dog.id));
          let regionOk = owner.region === region;
          let aliveOk = dog.died === 0;
          return breedOk && regionOk && aliveOk;
        }).length;

        for (breed of breedsInRegion) {
          let nDogsTotal = Dog.all.filter(dog => {
            let breedOk = dog.breed === breed;
            let owner = Owner.all.find(owner => owner.dogIds.includes(dog.id));
            let regionOk = owner.region === region;
            return breedOk && regionOk;
          }).length;        

        data.push({
          breed: breed,
          nDogsAlive: nDogsAlive,
          nDOgsTotal: nDogsTotal,
        })
      }
    }
  }


  static all = []
  constructor(id, weight, born, died, breed, kennelId) {
    this.constructor.all.push(this)
    this.id = id;
    this.weight = weight; // Kg
    this.born = born; // year, four digits
    this.died = died; // year, four digits; 0 if dog still alive
    this.breed = breed; // String, for example: "Boxer"
    this.kennelId = kennelId; // Kennel in which the dog was born
  }
}

class Kennel {
  static all = []
  constructor(id, breeds) {
    this.constructor.all.push(this)
    this.id = id;
    this.breeds = breeds; // array of strings, for example: ["Boxer", "Husky"]
  }
}

class Owner {
  static all = []
  constructor(id, region, dogIds) {
    this.constructor.all.push(this)
    this.id = id;
    this.region = region;
    this.dogIds = dogIds; // Array of dog IDs
  }
}
