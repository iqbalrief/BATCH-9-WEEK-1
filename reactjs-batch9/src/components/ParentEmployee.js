import e from 'cors'
import React, { Component } from 'react'
import ChildEmployee from './ChildEmployee'

const employees = [
    { empId: 1, empName: "dian", salary: 45 },
    { empId: 2, empName: "asep", salary: 35 },
    { empId: 3, empName: "budi", salary: 25 },
    { empId: 4, empName: "dedy", salary: 34 }
]

export default class ParentEmployee extends Component {

    state = {
        emps: employees
    }

    upSalary = (empId) => {
        this.setState({
            emps: [...this.state.emps.map(emp =>{
                if (emp.empId === empId){
                    emp.salary = emp.salary+10
                    return emp;
                }else {
                    return emp;
                }
            })]
        })
    }

    downSalary = (empId) => {
        this.setState({
            emps: [...this.state.emps.map(emp => {
                if(emp.empId === empId){
                    emp.salary = emp.salary-10
                    return emp
                } else {
                    return emp;
                }
            })]
        })
    }

    render() {
        const { emps } = this.state;
        return (
            <div>
                {
                    emps.map(emp => {
                        return (
                            <ChildEmployee
                                empId={emp.empId}
                                empName={emp.empName}
                                salary={emp.salary}
                                upSalary={this.upSalary}
                                downSalary={this.downSalary}
                            />
                        )
                    })
                }
            </div>
        )
    }
}