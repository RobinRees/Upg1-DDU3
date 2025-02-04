class Book {
    constructor (data) {

        this.title = data.title;
        this.author = data.author;
        this.year = data.year;
    }

    get title () {
        return this._title;
    }
    set title (value) {
        if (typeof value === "string" && value.length > 0) {
            this._title = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            console.error("title måste vara icke tom sträng");
        }
    }

    get author () {
        return this._author;
    }
    set author(value) {
        if (typeof value === "string" && value.length > 0) {
            this._author = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            console.error("author måste vara icke tom sträng");
        }
    }

    get year () {
        return this._year;
    }

    set year(value) {
        if (Number.isInteger(value) && value > 0) {
            this._year = value;
        } else {
            console.error("Year måste vara ett positivt heltal");
        }
    }

    get print() {
        return `${this.author} ${this.year}: ${this.title}`
    }
}


let bookIndex = [
    {
        title: "hermeys Olyhmpdf",
        author: "willhelm skott",
        year: 1999
    },


];

const book1 = new Book(bookIndex[0]);
console.log(book1.print);