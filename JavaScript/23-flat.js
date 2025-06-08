
const array = [1, 3, 4, [33,44, [77, 99] ], [5, 8] , 2];
console.log(array);
const flattenArray = array.flat(1)
console.log(flattenArray);


console.log(`======= Removing the empty slots ====== `);
const arrayOne = [1, , 3, , 4, [99, 88], 2, , ,];
console.log(arrayOne.length);

const arrayOneFlat = arrayOne.flat();
console.log(arrayOneFlat);