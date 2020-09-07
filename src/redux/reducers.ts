import {IAction, IPost} from "../types";
import {
    ADD_COUNTER_TYPE,
    CHANGE_SELECTED_BUTTON_TYPE,
    SET_TODOSLIST_TYPE,
    SORT_TODOS_LIST_BYCOUNTER_TYPE,
    SORT_TODOS_LIST_BYSUBMITTER_TYPE,
    SORT_TODOS_LIST_BYTITLE_TYPE
} from "./actions";
import {combineReducers} from 'redux'


const selectedButtonReducer = (state: number = 0, action: IAction): number => {
    switch (action.type) {
        case CHANGE_SELECTED_BUTTON_TYPE:
            return action.payload
        default:
            return state
    }
}

const todosKeysReducer = (state: number[] = [], action: IAction): number[] => {
    switch (action.type) {
        case SET_TODOSLIST_TYPE:
            return action.payload.map((post: IPost) => post.id)          //mi torna un array di id

        case SORT_TODOS_LIST_BYTITLE_TYPE:
            return [...action.payload].sort((todoA: IPost, todoB: IPost) => todoA.title > todoB.title ? 1 : -1).map((post: IPost) => post.id)

        case SORT_TODOS_LIST_BYCOUNTER_TYPE:
            return [...action.payload].sort((todoA: IPost, todoB: IPost) =>
                todoA.counter > todoB.counter ? 1 : -1
            ).map((post: IPost) => post.id)

        case SORT_TODOS_LIST_BYSUBMITTER_TYPE:
            return [...action.payload].sort((todoA: IPost, todoB: IPost) => todoA.submitterName > todoB.submitterName ? 1 : -1).map((post: IPost) => post.id)

        default:
            return state
    }
}


const todosEntitiesReducer = (state: { [key: number]: IPost } = {}, action: IAction): { [key: number]: IPost } => {

    switch (action.type) {
        case SET_TODOSLIST_TYPE:
            return action.payload.reduce((agg: { [key: number]: IPost }, post: IPost) => (
                {
                    ...agg,
                    [post.id]: post
                }
            ), {})
        case ADD_COUNTER_TYPE:
            return state ? {
                ...state,
                [action.payload]: {...state[action.payload], counter: state[action.payload].counter + 1}
            } : state
        default:
            return state
    }
}

export interface IRootSate {
    selectedButton: number
    todosKeys: number[]
    todosEntities: { [key: number]: IPost }
}

const rootReducer = combineReducers<IRootSate>({
    selectedButton: selectedButtonReducer,
    todosKeys: todosKeysReducer,
    todosEntities: todosEntitiesReducer,
})
export default rootReducer

