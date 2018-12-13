export const c = {
    CHANGE_FILTER: "CHANGE_FILTER",
    PUT_NEW_TASK: "PUT_NEW_TASK",
    PUT_TASK: "PUT_TASK",
    CLEAR_COMPLETED: "CLEAR_COMPLETED"
}

export const putTaskActionCreator = (tasks) =>{
    return{
        type: c.PUT_TASK,
        tasks: tasks
    }
};

export const clearCompletedCreator = () =>{
    return{
        type: c.CLEAR_COMPLETED,

    }
}

export const changeFilterCreator = (newFilterValue) =>{
    return{
        type: c.CHANGE_FILTER,
        value: newFilterValue
    }
}