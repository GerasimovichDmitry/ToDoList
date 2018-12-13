import React, {Component} from 'react';
import {createStore} from 'redux';
import {todolistReducer} from "./redux/todolist-reducers";
import './Todolist.css';
import TodolistFooter from "./TodolistFooter";
import TodolistTaskCreater from "./TodolistTaskCreater";
import TaskList from "./TaskList";
import {getTasks} from "./Services"

class Todolist extends Component {

    constructor(props) {
        super();

        this.store = createStore(todolistReducer);
        var state =this.store.getState();
        this.state = state;

        getTasks(555333)
            .then(tasksFromServer => {
                  var tasks = tasksFromServer.map(itemFromServer=>{
                     return {
                         title: itemFromServer.title,
                         isDone: itemFromServer.done,
                         id: itemFromServer.id
                     }
                      });
                  this.setState({tasks: tasks});
            })

        this.store.subscribe(()=>{
            state = this.store.getState();
            this.setState(state);
        });

    }

    putTaskToState(task) {
        this.setState({
            tasks:
                [...this.state.tasks, task]
        })
    };

    updateTask(task) {
        const newTaskUpdate = [...this.state.tasks];
        newTaskUpdate.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone;
                return;
            }
        });
        this.setState({
            tasks: newTaskUpdate
        })
    };

    deleteTask(taskId) {
        this.setState({
            tasks: this.state.tasks.filter((el) => {
                return el.id !== taskId;
            })
        })
    };

    filterChanged(newFilter){
        this.setState({
            filter: newFilter
        })
    };

    clearCompleted(){
        this.setState({
            tasks: this.state.tasks.filter(el => !el.isDone)
        })
    }

    render() {
        var {filter} = this.state;
        var newFilteredTasks = [];
        if(filter === 'all'){newFilteredTasks = this.state.tasks};
        if(filter === 'active'){newFilteredTasks = this.state.tasks.filter(el=> !el.isDone)};
        if(filter === 'completed'){newFilteredTasks = this.state.tasks.filter(el => el.isDone)};

        return (
            <div className="todolist">
                <TodolistTaskCreater onCreate={this.putTaskToState.bind(this)}/>
                <TaskList tasks={newFilteredTasks} onDelete={this.deleteTask.bind(this)}
                          onUpdate={this.updateTask.bind(this)}/>
                <TodolistFooter tasks={this.state.tasks}
                                filter={this.state.filter}
                                filterChanged={this.filterChanged.bind(this)}
                                clearCompleted={this.clearCompleted.bind(this)}/>
            </div>

        )

    }
};

export default Todolist;