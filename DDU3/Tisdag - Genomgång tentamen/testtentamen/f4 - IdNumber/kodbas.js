class Person {
  static all = []
  constructor (bornDate, name, gender) {
    this.bornDate = bornDate; // {year: int, month: int, day: int}
    this.name = name;
    this.gender = gender;
    this.setIdNumber();
    this.constructor.all.push(this);
  }

  setIdNumber() {
    //this.idNumber

    let idNumberFound = false; 
    let idNumber;
    while (!idNumberFound) {
      let n1 = Math.floor(10 * Math.random())
      let n2 = Math.floor(10 * Math.random())
      let n4 = Math.floor(10 * Math.random())


      let even = [0, 2, 4, 6, 8];
      let odd = [1, 3, 5, 7, 9];
      let relevant = this.gender === "m" ? odd : even;
      let index = Math.floor(5 * Math.random());


      let n3 = relevant[index];
      idNumber = `${n1}${n2}${n3}${n4}`;
      let bornSameDay = Person.all.filter(person => {
        return person.year === this.year &&
        person.month === this.month && 
        person.day === this.day;
      });
      idNumberFound = bornSameDay.every(person => {
        person.idNumber != idNumber;
        
      });
      
    }
    this.idNumber = idNumber;
  }
}