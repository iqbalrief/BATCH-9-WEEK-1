const employees = require("./soal.js");


let filterDepartment = (employees, department_id) => {
    return employees.filter(x => x.department_id === department_id);
}
console.log(filterDepartment(employees, 6));

