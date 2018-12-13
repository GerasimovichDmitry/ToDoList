import {c} from "./todolist-actions";

export const todolistReducer = (oldstate, action) => {
    switch (action.type) {
        case c.CHANGE_FILTER:
            return {
                ...oldstate,
                filter: action.value
            };
        case c.PUT_NEW_TASK:
            return {
                ...oldstate,
                tasks: [...oldstate.tasks,
                    {
                        id: action.id,
                        title: action.title,
                        isDone: action.isDone
                    }]
            }
        case c.PUT_TASK:
            return{
                ...oldstate,
                tasks:[...oldstate.tasks, action.tasks]
    }
}
}