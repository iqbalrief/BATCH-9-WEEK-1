//init array
const numbers = [1,2,3,4,5]
console.log(numbers);

//acces array tiap index
console.log(numbers[3]);

//add new Element di index terakhir array(lastindex)
numbers.push(8);
console.log(numbers);

//add new element di first index
numbers.unshift(10);
console.log(numbers);

//hapus element di first index
numbers.shift();
console.log(numbers);

//hapus element di last index
numbers.pop();
console.log(numbers);