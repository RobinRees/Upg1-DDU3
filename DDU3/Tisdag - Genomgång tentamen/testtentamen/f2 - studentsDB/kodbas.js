
const MonthsDays = [31, 28, 31, 30, 31,];

const STUDENTS = [
  {
      born: { year: 1998, month: 11, day: 3  },
      name: {
          first: "Kerstin",
          last: "Rivera"
      },
      idNumber: 4707,
      courses: [
          {
              code: "ME101B",
              year: 2020,
              g: 2020
          },
          //fler kurser...
      ]
  },
  //fler studenter...
];

class Student {
  static all = []
  constructor (data) {
    this.constructor.push(this);
    this.born = data.born;
    this.name = data.name;
    this.idNumber = data.idNumber;
    this.courses = data.courses;
  }

  get year() {
    return this.born._year;
  }

  get month() {
    return this.born._month;
  }
  get day() {
    return this.born._day;
  }

  set year (value) {
    if (value.length != 4 && typeof value != Number) {
      throw Error("Fel");
    } else {
      this.born.year = value
    }
  }

  set month (value) {
    if (value < 0 || value > 12 || typeof value == "String") {
      throw Error("fel");
    } else {
      this.born._month = value;
    }
  }
  
  set day (value) {
    if (value < 1 || value > MonthsDays[this.born._month - 1]) {
      throw Error("Fel");
    } else {
      this.born._day = value;
    }
  }

  get pnr () {

    let day = null;
    let month = null;
    if (this.born._day.length = 1) {
      day = `0${this.born._day}`;

    } else {
      day = this.born._day;
    }
    if (this.born._month.length = 1) {
      month = `0${this.born._month}`;

    } else {
      month = this.born._month;
    }
    return `${this.born._year}${month}${day}-${this.idNumber}`
    
  }
  static get goodresults() {
    let studentGoodResults = STUDENTS.filter(x => x.courses.every(x => x.year == x.g)) 
    return studentGoodResults;
    
  }
}