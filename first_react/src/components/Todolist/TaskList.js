import React, {Component} from 'react';
import Task from "./Task";

class TaskList extends Component {
    
    render() {
        return (
            <div className="tasks">
                {
                    this.props.tasks.map((item) => {
                        return <Task item={item}
                                     callbackDelete={this.props.onDelete} key={item.id}
                                     callbackUpdate={this.props.onUpdate}/>;
                    })
                }
            </div>
        );
    }
};

export default TaskList;