/* 
Koda en getter-metod som returnerar true om studenten är en Zoomer (vds född mellan 1997 och 2012).

Koda en metod som returnerar antalet studenter som läser programmet.

Koda en metod som tar emot ett namn och returnerar alla studenter som har det som firstName.

Koda en metod som returnerar antalet studenter som läser på en viss nivå (bachelor, master eller PhD)

Koda en metod som returnerar studenten (hela instansen) som har högsta meritvärde av alla som läser ett visst programmet

Koda en metod som returnerar ett objekt med ett programs info vad gäller meritvärde:
{ min, max, average }
Där min är meritvärdet av studenten i det programmet som har lägst meritvärde 
Där max är meritvärdet av studenten i det programmet som har högst meritvärde 
Där average är det genomsnittliga meritvärdet av alla studenter i det programmet

Vi vill veta om månaden där en student var född spelar roll i hens meritvärde. Koda en metod som returnerar ett objekt:
{
  jan: aveJan,
  feb: aveFeb,
  etc
}
Där aveJan är det genomsnittliga meritvärdet av alla studenter som är födda i januari. Detsamma för aveFeb, etc.

Vi vill också veta om födelseåret spelar roll för meritvärdet. Koda en metod som returnerar ett objekt:
{
  y1998: {n: 60, average: 15.5},
  y2000: {n: 46, average: 16.5},
  etc...
}
Där egenskapen representerar födelseåret och objektet {n, average} inkluderar data om studenterna som föddes det året. 
n är antalet studenter och average genomsnittet av deras meeritvärde.
Notera att vi inte vet när den äldste/yngste studenten föddes... 
vi vet inget i förväg vad gäller födelseåren, infon finns i studenternas birthdate-egenskapen.

*/





/*
Koda en metod som tar emot en "level" och returnerar den genomsnittliga åldern av studenterna som läser på den nivån (level).

Koda en metod som returnerar programmet där studenterna har det högsta genomsnittliga meritvärde.


let array = [this.history[this.history.length -3,], this.history[this.history.length -2]]


*/

class Register {
  static students = [];
  static programs = [];
  static addStudent(data) {
    Register.students.push(new Student(data));
  }
  static addProgram(data) {
    Register.programs.push(new Program(data));
  }




}

class Student {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.program = data.program; // en instans av Program
    this.birthdate = data.birthdate; // "2000-01-01"
    this.merit = data.merit; // meritvärde
  }

  get isThisAZoomer () { // console.log(s.isThisAZoomer); //UPG 1
    let array = this.birthdate.split("-");
    const currentBirthdate = parseInt(array[0]);

    if (currentBirthdate >= 1997 && currentBirthdate <= 2012) {
      return true;
    } else {
      return false;
    }
  }

  returnNames(name) {
    return Register.students.filter(students => students.firstName === name); //Upg 3
  }

    studentsOnSpecificLevel(data) { //upg 4
    const array = Register.students.filter(student => student.program.level === data);
    return array.length;
  }

static getMeritByBirthMonth (month) {
  let merit = 0;
  let n = 0;
  for (let student of Register.students) {
    if (month == parseInt(student.birthdate.split("1")[1])) {
      merit += student.merit;
      n++;
    }
  }
  return merit / n;
}

static getMeritAllBirthMonths() {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  let result = {};
  let counter = 1;
  for (let month of months) {
    result[month] = this.getMeritByBirthMonth(counter);
    counter++;
  }
  return result;
}








/*

 createListofYears () {
  let array = [];
  let year = Infinity;
  
  for (let student of Register.students) {
    let studentBirthDate = parseInt(student.birthDate.split("-")[0]);
    if (!array.includes(studentBirthDate)) {
      array.push(studentBirthDate);
    } else {
      return array;
    }
  }

}


  findStudentsByYear (year) { //Merit istället, + counter. Objekt
    let array = []; 
    for (let student of Register.students) {
      if (parseInt(student.birthDate.split("-")[0]) === year) {
        array.push(student.merit);
      }
    }
  }

  finallyfinalMethod () {
    let yearArray = createListofYears();

    for (let years of yearArray) {
      findStudentsByYear(years)
    }
  }



*/




}

class Program {
  constructor(data) {
    this.name = data.name;
    this.level = data.level; // bachelor, master, PhD
  }

  howManyStudents() { // UPG 2
    const array = Register.students.filter(students => students.program === this);
    return array.length;
  }




  bestStudent () { // upg 5
    let array = Register.students.filter(student => student.program === this);

    let highest = null; 

    for (let student of array) {
      if (highest === null || student.merit > highest.merit) {
        highest = student;
      }
    }
    return highest;
  }

  returnAvrage() {
    let min = Infinity;
    let total = 0;

    let  best = this.bestStudent();
    let max = best.merit;


    let array = Register.students.filter(student => student.program === this);

    for (let student of array) {
      if (min === Infinity || student.merit < min) {
        min = student.merit
      }
    }

    for (let student of array) {
      total = total + student.merit
    }
    let avrage = total / array.length;

    return {min, max, avrage}

  }

}
