class Person {
    constructor (data) {
        this.name = {
            first: data.name.first,
            last: data.name.last
        }
        this.adress = {
            postcode: data.adress.postcode,
            street: data.adress.street,
            number: data.adress.number,
            city: data.adress.city,
        }
        this.bioInfo = {
            weight: data.bioInfo.weight,
            height: data.bioInfo.height
        }
    }

    myBMI() {
        return this.bioInfo.weight / (this.bioInfo.height * this.bioInfo.height);
    }
}

let peopleIndex = [
    {
        name: {first: "Janis", last: "Joplin"},
        adress: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"},
        bioInfo: { weight: 56, height: 1.62}
      },
      {
        name: {first: "Jimi", last: "Hendrix"},
        adress: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"},
        bioInfo: { weight: 68, height: 1.78}
      },

];


const person1 = new Person(peopleIndex[0]);
const person2 = new Person(peopleIndex[1]);

console.log(person1.myBMI().toFixed(1));