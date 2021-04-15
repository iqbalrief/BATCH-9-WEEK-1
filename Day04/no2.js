const employees = require("./soal.js");
console.log(employees[1]);

function salaryRange(employees, minSalary, MaxSalary) {
    let range = employees.filter(employee => employee.salary >= minSalary && employee.salary <= MaxSalary);
    return range;
}
console.log(salaryRange(employees,2400,4800));