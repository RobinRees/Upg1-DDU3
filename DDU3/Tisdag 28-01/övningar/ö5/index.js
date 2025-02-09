class LibraryItem {
    
    static _totalItems = 0;

    constructor (value) {
        this.title = value.title;
        this.year = value.year;
        LibraryItem._totalItems++;
    }

    static get totalItems() {
        return LibraryItem._totalItems;
    }

    get title () {
        return this._title;
    }

    set title (value) {
        if (typeof value === "string" && value.length > 0) {
            this._title = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            console.error("title måste vara icke tom sträng")
        }
    }




    get year () {
        return this._year;
    }

    set year (value) {
        if (Number.isInteger(value) && value > 0) {
            this._year = value;
        } else {
            console.error("year måste vara ett positivt heltal");
        }
    }
}

class Book extends LibraryItem {
    constructor (value) {
        super(value);
        this.author = value.author;
    }

    get author () {
        return this._author;
    }

    set author (value) {
        if (typeof value === "string" && value.length > 0) {
            this._author = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            console.error("author måste vara icke tom stäng");
        }
    }
}

class Magazine extends LibraryItem {
    constructor (value) {
        super(value);
        this.issueNumber = value.issueNumber;
    }

    get issueNumber () {
        return this._issueNumber;
    }

    set issueNumber (value) {
        if (Number.isInteger(value) && value > 0) {
            this._issueNumber = value;
        } else {
            console.error("issueNumber måste vara ett positivt heltal");
        }
    }
}

const itemsArray = [
    new Book({ title: "harry potter", year: 1997, author: "j.k. rowling" }),
    new Book({ title: "the hobbit", year: 1937, author: "j.r.r. tolkien" }),
    new Book({ title: "1984", year: 1949, author: "george orwell" }),
    new Magazine({ title: "ational Geographic", year: 2024, issueNumber: 150 }),
    new Magazine({ title: "TIME", year: 2023, issueNumber: 48 }),
    new Magazine({ title: "Scientific American", year: 2022, issueNumber: 12 })
];

console.log(itemsArray);

