import React, {Component} from 'react';
import './Todolist.css';
import {createTask} from './Services'

class TodolistTaskCreater extends Component {


    createNewTask(e) {
        if (e.key === 'Enter') {


            const inputNewTask = e.currentTarget;
            createTask(inputNewTask.value,555333)
                .then(data => {
                    const newTask =
                        {
                            title: data.task.title,
                            isDone: data.task.done,
                            id: data.task.id
                        };
                    this.props.onCreate(newTask);

                    inputNewTask.value = '';
                })
        }
    }

    render() {
        return (
            <div className="header">
                <input onKeyPress={this.createNewTask.bind(this)}/>
            </div>
        )
    }
}

export default TodolistTaskCreater;