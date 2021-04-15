const employees = require("./soal.js");

function sortSalary(employees) {
    let sorting = employees.sort((employeesA,employeesB)=> {
        return employeesA.salary - employeesB.salary
    }
    )
    return ["Upah min " + sorting[0].salary, "upah max "+sorting[sorting.length-1].salary ]
}
console.log(sortSalary(employees));