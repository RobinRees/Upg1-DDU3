function removeDuplicates(array1) {
    let array2 = [];

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            array2.push(array[i]);
        }
    }
    return array2;
}