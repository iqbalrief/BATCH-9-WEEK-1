function segitiga(posisi) {
    let hasil = '';
    for (let i = 0; i < posisi; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));