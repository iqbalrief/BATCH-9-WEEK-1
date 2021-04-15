const employees = require("./soal");

//nomor 5
function totalSalaryAllEmployee(employees) {

let hasil = employees.reduce(function(total, employee) {
    return total + parseFloat(employee.salary)
    },0)

    return hasil
}

console.log(totalSalaryAllEmployee(employees));