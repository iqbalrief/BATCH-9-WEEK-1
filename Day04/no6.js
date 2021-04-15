const employees = require("./soal");


function totalSalaryByDepartment(employees, departmentId) {
    let hasil = employees.filter(total => total.department_id == departmentId)
    return hasil.reduce((total, department)=>total + parseInt(department.salary),0)
}
console.log(totalSalaryByDepartment(employees,11));