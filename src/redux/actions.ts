import {IAction, IPost} from "../types";

// ACTION CREATOR
export const ADD_COUNTER_TYPE = 'ADD_COUNTER' // type
export const SET_TODOSLIST_TYPE = 'SET_TODOSLIST'
export const CHANGE_SELECTED_BUTTON_TYPE = 'CHANGE_SELECTED_BUTTON'
export const SORT_TODOS_LIST_BYTITLE_TYPE = 'SORT_TODOS_LIST_BYTITLE'
export const SORT_TODOS_LIST_BYCOUNTER_TYPE = 'SORT_TODOS_LIST_BYCOUNTER'
export const SORT_TODOS_LIST_BYSUBMITTER_TYPE= 'SORT_TODOS_LIST_BYSUBMITTER'


export const addCounterTodoAction = (id: number): IAction => {
    return {type: ADD_COUNTER_TYPE, payload: id}
}
export const setTodosListAction = (posts: Array<IPost>): IAction => {
    return {type: SET_TODOSLIST_TYPE, payload: posts}
}
export const changeSelectedButtonAction = (id: number): IAction => {
    return {type: CHANGE_SELECTED_BUTTON_TYPE, payload: id}
}
export const sortTodoListByTitleAction = (posts: Array<IPost>): IAction => {
    return {type: SORT_TODOS_LIST_BYTITLE_TYPE, payload: posts}
}
export const sortTodoListByCounterAction = (posts: Array<IPost>): IAction => {
    return {type: SORT_TODOS_LIST_BYCOUNTER_TYPE, payload: posts}
}
export const sortTodoListBySubmitterAction = (posts: Array<IPost>): IAction => {
    return {type: SORT_TODOS_LIST_BYSUBMITTER_TYPE, payload: posts}
}
