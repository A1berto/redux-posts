import {IAction, IPost} from "../types";

// ACTION CREATOR
export const ADD_COUNTER_TYPE = 'ADD_COUNTER' // type
export const SET_TODOSLIST_TYPE = 'SET_TODOSLIST'

export const addCounterTodoAction = (id: number): IAction => {
    return { type: ADD_COUNTER_TYPE, payload: id}
}
export const setTodosListAction = (posts: Array<IPost>):IAction=>{
    return {type: SET_TODOSLIST_TYPE, payload:posts}
}