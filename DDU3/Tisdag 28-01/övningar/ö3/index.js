class Book {
    constructor (data) {
        this.title = data.title;
        this.author = data.author;
        this.year = data.year;
    }
    get author () { return this._author; }
    set author (value) {
        this._author = value[0].toUpperCase + value.slice(1); // första bokstaven stor
    }

    get year () { return this._year; }
    set year (value) {
        if (value < 0 || value != Math.floor(value)) throw Error();
        this._year = value;
    }

    get print () {
        return `${this.author}`
    }
}