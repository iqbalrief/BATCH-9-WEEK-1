/*var nomor = [2, 3, 4, 5, 6, 7];
var genap = [];
var i = 0;

for(i=0; i <nomor.length; i++){
    if (nomor[i] % 2 == 0) {
        genap.push(nomor[i]);
        } else  {
    }
}

console.log(genap);
*/

function genap(numbers) {
result = [];
numbers = numbers.split("")
numbers.forEach((number) => {
    if (number % 2 === 0) result.push(number)
})
return result.join(",")
}
console.log("12345678");