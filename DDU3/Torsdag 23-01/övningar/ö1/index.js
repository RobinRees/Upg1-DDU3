class Person {
    static findByName (name) {

    }
    constructor (data) {
        this.name = data.name;
        this.adress = data.adress;

    }

    writeName () {
        return this.name.first + " " + this.name.last;
    }

    writeAdress () {
        const a = this.adress;
        return `${a.street} ${a.number}; ${a.city} ${a.postcode}`
    }

};



const array = [
    {
        name: {first: "Janis", last: "Joplin"},
        address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"}
      },
      {
        name: {first: "Jimi", last: "Hendrix"},
        address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"}
      },
];

const persons = [];
for (let element of array) {
    persons.push(new Person(element));
    console.log(persons[persons.length-1].writeName());
};


console.log(persons[0].writeName());

function f1 (name) {
    for (let instance of persons) {
        if (instance.name.first == name) return instance;
    }
    return null; 
}

let p1 = new Person({
    name: {first: "Janis", last: "Joplin"},
    adress: {}
});