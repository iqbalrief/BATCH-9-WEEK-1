const employees = require("./soal.js");
console.log(employees[1]);

//nomor 4
function showAges(employee) {
    let result = employee.sort((employee1, employee2) => parseInt(employee2.salary) - parseInt(employee1.salary));
return result;
}
console.log(showAges(employees));
