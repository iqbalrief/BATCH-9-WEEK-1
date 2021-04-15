const employees = require("./soal.js");
console.log(employees[1]);

function hireRangeDate(employees,startDate, endDate) {
    let hasil = employees.filter(employee => employee.manager_id === null & employee.hire_date > startDate && employee.hire_date < endDate);
return hasil;
}

console.log(hireRangeDate(employees,"12-01-1993","12-12-1995"));