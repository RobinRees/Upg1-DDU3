class Person {
  static all = []
  constructor(id, alias) {
    this.constructor.all.push(this);
    this.id = id;
    this.alias = alias;
  }
}
class Artist extends Person {
  constructor(id, alias, country) {    
    super(id, alias);
    this.country = country;
  }
}
class Listener extends Person {
  constructor(id, alias, follows = []) {
    super(id, alias);
    this.follows = follows; // Array of artists' ids
  }
}
class Song {
  static all = []
  static Genres = ["rock", "pop", "soul", "punk"]


  static allByGenre(genre) {
    if (!this.Genres.includes(genre)) {
      inputError();
    } else {
      let genreArray = Song.all.filter(x => x.songs.genre.toLocaleLowerCase() == genre)
      return genreArray;
    }
  }

  constructor(id, title, genre, artistId) {
    this.constructor.all.push(this);
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.artistId = artistId;
  }

  nListeningsInMonth(month) {
    if (!(month >= 1 && month <=12 && month % 1 === 0)) {
      inputError();
    } else {
      let relevantListens = Listening.all.filter(listen => {
        let monthOk = listen.date.month === month;
        let songOk = listen.songID === this.id;
        return monthOk && songOk;
      });
      return relevantListens.length;
    }
  }

  get genre() { return this._genre};

  set genre (value) {
    if (!Genres.includes(value)) {
      inputError();
    } else {
      this._genre = value;
    }
  }
}
class Listening {
  static all = []
  constructor(date, listenerId, songId) {
    this.constructor.all.push(this);
    this.date = date; // {year: int, month: int, day: int}
    this.listenerId = listenerId;
    this.songId = songId;
  }
}
function inputError () {
 console.error("Det måste vara en sträng");
}