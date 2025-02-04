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
            city: data.adress.city
        }
    };

    writeName (parent) {
        const p = document.createElement("p");
        p.textContent = this.name.first + " " + this.name.last;
        parent.appendChild(p);
        
    }

}

let peopleIndex = [
    {
        name: { first: "Janis", last: "Joplin"},
        adress:  { postcode: 21655, street: "Bergsgatan", number: 42, city: "malmö"}
    },
    {
        name: { first: "Jimi", last: "Hendrix"},
        adress: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö" }
    }

];

const person1 = new Person(peopleIndex[0]);
const person2 = new Person(peopleIndex[1]);

const mainElement = document.querySelector("main");
person1.writeName(mainElement)
person2.writeName(mainElement)
