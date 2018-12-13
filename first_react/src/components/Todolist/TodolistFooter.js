import React, {Component} from 'react';

class TodolistFooter extends Component {

   
    filterChoice(e){
    this.props.filterChanged(e.currentTarget.dataset.value)
    }

    render() {
        return (
            <div className="footer">
                <div>
                    <span>{this.props.tasks.filter((task) => !task.isDone).length} items left</span>
                </div>
                <div className="buttons">
                    <button className={this.props.filter === 'all' ? 'selected' : ''}
                            data-value="all"
                            onClick={this.filterChoice.bind(this)}>All
                    </button>
                    <button className={this.props.filter ==='active' ? 'selected' : ''}
                            data-value="active"
                            onClick={this.filterChoice.bind(this)}>Active
                    </button>
                    <button className={this.props.filter === 'completed' ? 'selected' : ''}
                            data-value="completed"
                            onClick={this.filterChoice.bind(this)}>Completed
                    </button>
                </div>
                <div>
                    <span onClick={this.props.clearCompleted}>Clear completed</span>
                </div>
            </div>
        )
    }
}

export default TodolistFooter;