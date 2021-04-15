const employees = require("./soal.js");

function searchEmployee(employees,prefix) {
    let hasil = employees.filter(employee => employee.first_name.startsWith(prefix)) 
    return hasil;
 }
 console.log(searchEmployee(employees,"D"));
