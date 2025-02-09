//Skapa en ny array med färre element
//Filtrera ut vissa element
function array_filter (targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    if (callback(element)) result.push(element);
  }
  return result;
}

//Ändra varje element i en array
//Behålla samma antal element men förändrade
function array_map (targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    result.push(callback(element));
  }
  return result;
}

//Snabbarae än filter när vi bara behöver ett resultat
//Hitta den första saken i listan som stämmer bra med vad vi söker efter.
//Bra när vi vet att det bara finns en utav det vi letar efter (Ex ID)
function array_find (targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;

}
// Returnerar indexet (Platsen) för första elementet i arrayen som stämmer in på callback
function array_findIndexOf (targetArray, callback) {
  for (let i = 0; i < targetArray.length; i++) {
    if (callback(targetArray[i])) {
      return i;
    }
  }
  return -1;
}

//Användbart när vi snabbt vvill veta om minst ett element uppfyller ett villkor
function array_some(targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) {
      return true
    }
  }
  return false;
}


//console.log(array_every(numbers, isEven))
function array_every(targetArray, callback) {
  for (let elemetn of targetArray) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}