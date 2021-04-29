import React, { Component } from 'react';

import { v4 as uuid_v4 } from "uuid";
import List from './List';

const listTodo = [
    {
        id: uuid_v4(),
        task: 'Learn Javascript es6',
        completed: false
    },
    {
        id: uuid_v4(),
        task: 'Learn React Fudamental',
        completed: false
    },
    {
        id: uuid_v4(),
        task: 'Learn Redux Fudamental',
        completed: false
    },
    {
        id: uuid_v4(),
        task: 'Final Project #1',
        completed: false
    }
];

class Todo extends Component {

    state = {
        task: '',
        items: listTodo
    }

    componentDidMount() {
        // your code...
        const { items } = this.state;
        console.log(`current items diMount : ${items}`)
    }



    handleOnChange = e => {
        const { target: { value } } = e;
        console.log(value);

        // complete code below
        this.setState({
            task: value
        });
    }

    handleOnSubmit = e => {
        e.preventDefault(e);
        // your code, use spread operator to add new task
        const sub = {
            id: uuid_v4(),
            task: this.state.task,
            completed: false
        }
        //console.log(sub);
        this.setState({
            items: [...this.state.items, sub]
        });
    }

    isCompleted = (Id) => {
        console.log(Id)
        // your code, find id, then use spread operator
        this.setState({
            items: [...this.state.items.map(item => {
                if (item.id === Id) {
                    item.completed = true
                    return item;
                }
                else return item;
            })]
        })
        console.log(this.state.items);
    }

    removeTask = (id) => {
        // your code, use filter to get new task list
        this.state.items.splice(this.state.items.map(item =>{
            return item.id
        }).indexOf(id), 1)
        
        this.setState({
            items: [...this.state.items]
        })
    }

    render() {
        return (
            <div className="Todo">
                <h1>Todo List:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.task} onChange={this.handleOnChange} />
                </form>

                <List
                    items={this.state.items}
                    isCompleted={this.isCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}

export default Todo;