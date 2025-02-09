class Movie {
    constructor (value) {
        this.title = value.title;
        this.director = value.director;
        this.year = value.year;
        this.review = value.review;

        globalFilmKatalog.addMovie(this);
    }

    get year () {
        return this._year;
    }
    
    set year (value) {
        if(typeof value === "number" && value % 1 === 0) {
            this._year = value;
        } else {
            console.error("year är inte ett positivt heltal")
        }
    }

    get review () {
        return this._review;
    }

    set review (value) {
        if (typeof value === "number" && value >= 1 && value <= 5) {
            this._review = value;
        } else {
            console.error("Review måste vara en siffra mellan 1 och 5");
        }
    }
}



class FilmKatalog {
    constructor () {
        this.filmer = [];
    }

    addMovie(movie) {
        if (movie instanceof Movie) {
            this.filmer.push(movie);
        } else {
            console.error("Endast Movie-objekt kan läggas till");
        }
    }

    removeMovie(title) {
        const index = this.filmer.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
        if (index !== -1) {
            console.log(`filmen ${title} har tagits bort.`)
        } else {
            console.error(`filmen ${title} hittades inte`)
        }
    }

    findByTitle(title) {
        return this.filmer.filter(movie => movie.title.toLowerCase() === title.toLowerCase());
    }

    findByDirector(director) {
        return this.filmer.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
    }

    findByYear(year) {
        return this.filmer.filter(movie => movie.year === year);
    }


}

const globalFilmKatalog = new FilmKatalog();
class MovieList {
    constructor(name) {
        this.name = name;
        this.movies = [];
    }

    addMovieToList(movie) {
        if (movie instanceof Movie) {
            this.movies.push(movie);
        } else {
            console.error("Endast Movie-objekt kan läggas till i listan")
        }
    }

    removeMovieFromList(title) {
        const index = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
        if (index !== -1) {
            this.movies.splice(index, 1);
            console.log(`Filmen ${title} har tagits bort från listan.`);
        } else {
            console.error(`filmen ${title} hittades inte i listan`);
        }
    }


    get nFilms () {
        return this.movies.length;
    }

    get avrageReview() {
        if (this.movies.length === 0) return 0;
        let totalReview = 0;
        for (let i = 0; i < this.movies.length; i++) {
            totalReview += this.movies[i].review;
        }
        return (totalReview / this.movies.length).toFixed(2);
    }
}






























const movieIndex = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, review: 5 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, review: 5 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, review: 4 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, review: 5 },
    { title: "Fight Club", director: "David Fincher", year: 1999, review: 4 },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, review: 5 },
    { title: "The Matrix", director: "Lana & Lilly Wachowski", year: 1999, review: 5 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, review: 4 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, review: 5 },
    { title: "Movie 43", director: "Various", year: 2013, review: 1 },
    { title: "The Room", director: "Tommy Wiseau", year: 2003, review: 1 },
    { title: "Catwoman", director: "Pitof", year: 2004, review: 1 },
    { title: "Jack and Jill", director: "Dennis Dugan", year: 2011, review: 1 },
    { title: "Battlefield Earth", director: "Roger Christian", year: 2000, review: 1 },
    { title: "Dragonball Evolution", director: "James Wong", year: 2009, review: 1 }
];

for (let i = 0; i < movieIndex.length; i++) {
    new Movie(movieIndex[i]);
}
