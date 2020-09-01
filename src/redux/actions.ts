import {IAction, IPost} from "../types";

// ACTION CREATOR
export const ADD_COUNTER = 'ADD_COUNTER' // type

export const addCounterTodoAction = (todo:IPost): IAction => {
    return { type: ADD_COUNTER, payload: todo}
}