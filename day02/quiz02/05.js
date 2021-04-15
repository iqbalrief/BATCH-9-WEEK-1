var nomor = [1, 2, 3, 4, 5];
function tambah (nomor) {
var total = 0;

for(i = 0; i <nomor.length; i++){
    total += nomor[i];
 }
    return total;
}

 console.log(tambah(nomor));