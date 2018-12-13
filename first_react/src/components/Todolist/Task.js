import React, {Component} from 'react';
import {updateTask} from "./Services";

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            title: props.item.title
        }
        this.parentCallbackDelete = props.callbackDelete;
        this.ParentCallbackUpdate = props.callbackUpdate;
    }

    deleteTask() {
        this.parentCallbackDelete(this.props.item.id);
    }

    toggleTaskStatus() {
        var task = {...this.props.item};
        task.isDone = !task.isDone;
        updateTask(null, task.id, task.isDone, 555333)
            .then(data=>{
                this.setState({
                    editMode: false
                });
                this.ParentCallbackUpdate(task);
            });

    };

    goToEditMode(e){
        this.setState({
            editMode:true
        })
    };

    saveTitle(e){
    const newTitle = e.currentTarget.value;
    const task = {
        ...this.props.item
    };
    task.title = newTitle;
        updateTask(newTitle, task.id, null, 555333)
            .then(data=>{
                this.ParentCallbackUpdate(task);
            });
        this.setState({
            editMode: false
        })
    };

    changeTitle(e){
        this.setState({
            title: e.currentTarget.value
        })
    }

    render() {
        var {isDone} = this.props.item;
        var {title} = this.state;
        var displayElement = "";
        if (this.state.editMode) {
            displayElement = <input value={title} onChange={this.changeTitle.bind(this)}
                                                   onBlur={this.saveTitle.bind(this)}/>
        } else {
            displayElement = <span onDoubleClick={this.goToEditMode.bind(this)}>
                {title}
                </span>
        }
        return (
            <div className={isDone ? 'task done' : 'task'}>
                <input type="checkbox" checked={isDone} onClick={this.toggleTaskStatus.bind(this)}/>
                <span>
                {displayElement}
                </span>
                <span className="delete" onClick={this.deleteTask.bind(this)}>X</span>
            </div>
        )
    }
}

export default Task;