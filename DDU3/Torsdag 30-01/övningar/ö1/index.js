function array_filter (targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    if (callback(element)) result.push(element);
  }
  return result;
}

let a = ["asd", "asfgsfgsdg", "dasfgfdsg", "asfdsgsfg"];
let b

function array_map (targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    result.push(callback(element))
  }
  return result;
};


function array_find (targetArray, callback) {
  for (element of targetArray) {
    if (callback(element)) return element;
  }
  return undefined;
}

let c = ["asdf", "asfgsfgsdg", "dasfgfdsg", "asfdsgsfg"];
let d = a.map(function (string) {return string.length; })

function findindex (targetArray, callback) {
  for (let i = 0; i < targetArray.length; i++) {
    if (callback(targetArray[i]))  return i;
  }
  return -1;
}

function every (targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) {
      result.push(element);
      if (result.length == targetArray,length) return true;
    } else return false;
  }
}



let strings = ["asd", "sdfsd", "asdasd", "dsal", "asdf"];
let favvoNummer = [[23, 7, 18], [2, 8, 20], [2, 10]];

let myFs = [
  function (a) {return a == 1;},
  function (a) {return a + 1 == 1;},
  function (a) {return a + 2 == 1;},
  function (a) {return a + 3 == 1;},
  
];

let ff1 = myFs.find(f5);

function f1 (x) {
  return x.albums.length > 4;
}


function f2 (x) {
  if (x.name[0].toUpperCase() == "E") {return true;}
  return false;
}



function f3 (string) {
  return string[0] == string[string.length - 1]
}

function f4 (array) {
  return array.includes(2);
}

function f5 (element) {
  return element(1) == 1;
}

/*
artists.findIndex(f1);
Första elementet som får true.
*/

let endsWithf = c.find(function (string) { return string[string.length - 1] == "f"; });

let a1 = [[2, 3, 4], [1, 2, 3], [56, 77, 99, 1, 100]];
let b1 = a1.findIndex(callback1);
function callback1 (array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum < 10;
}


function array_some (targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) return true;
  }
  return false;
}

let b2 = a1.some(f6);

function f6(array) {
  for (let number of array) {
    if (number > 100) return true;
  }
  return false;
}

let b3 = a1.every(f8);

function f8 (array) {
  for (let element of array) {
    if (element < 10) {
      return true;
    }
  }
  return false;
}

let students = [
  {
    name: "erik",
    g: true,
  },
  {
    name: "sara",
    g: true,
  }
];

function allAreG (students) {
  return students.every(callback)
  function callback (student) {
    if (student.g) {return true}
    else return false;
  }
};

function allAreG_1 (students) {
  let result = [];
  for (let student of students) {
    if (student.g == true) {
      result.push(student);
    }
  }
  if (students.length === result.length) {
    return true;
  }
  else return false;
}

function allAreG_2 (students) {
  return students.find(callback) == undefined;
  function callback (student) {
    return student.g == false;
  }
}

function allAreG_3 (students) {
  return !students.some(callback);
  function callback (student) {
    return student.g == false;
  }
}