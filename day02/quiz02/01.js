//a
const fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
const sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(2,1);
console.log(fruits);

fruits.splice(2,3);
console.log(fruits);

fruits.splice(2, 0, "Rambutan", "Bengkuang");
console.log(fruits);

fruits.splice(4, 1, "Nangka");
console.log(fruits);

let vege = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
let fruitsvege = fruits.concat(vege);
console.log(fruitsvege);

fruitsvege.reverse()
console.log(fruitsvege);

//let myData = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan", "Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];
function swap(p1,p2, p3) { 
    let indexp2; let indexp3
    for (let i = 0; i < p1.length; i++) {
        if (p1[i] === p2) indexp2 = i
        if (p1[i] === p3) indexp3 = i
    }
    p1.splice(indexp2, 1, p3)
    p1.splice(indexp3, 1, p2)
    return p1;
}
console.log(swap(fruitsvege,"Tomat", "Jeruk"));
