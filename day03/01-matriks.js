const arr = [[4,5,6],[6,7,8],[9,10,12]];
console.log(arr);

function printMatrix(matrix) {
    let out ="";
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            out = out+" "+ matrix[row][column]
        }
        out += "\n";
    }
    return out;
}

console.log(printMatrix(arr));

function searchMatrix(matrix, k) {
    let index = undefined;
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            if(matrix[row][column] === k) {
                index = matrix[row][column]
            }
        }
    }
    return index;
}

console.log(searchMatrix(arr, 10));