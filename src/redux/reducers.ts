import {IAction, IPost} from "../types";
import {ADD_COUNTER_TYPE, SET_TODOSLIST_TYPE} from "./actions";
import {combineReducers} from 'redux'



const todosKeysReducer = (state: number[] = [], action: IAction): number[] => {
    switch (action.type) {
        case SET_TODOSLIST_TYPE:
            return action.payload.map((post: IPost) => post.id)          //mi torna un array di id
        default:
            return state
    }
}


const todosEntitiesReducer = (state: { [key: number]: IPost } | null = null, action: IAction): { [key: number]: IPost } | null => {

    switch (action.type) {
        case SET_TODOSLIST_TYPE:
            return action.payload.reduce((agg: { [key: number]: IPost }, post: IPost) => (
                {
                    ...agg,
                    [post.id]: post
                }
            ), {})
        case ADD_COUNTER_TYPE:
            return state ?{
                ...state,
                [action.payload]: {...state[action.payload], counter: state[action.payload].counter+1}
            }: state
        default:
            return state
    }
}

export interface IRootSate{
    todosKeys: number[]
    todosEntities:{ [key: number]: IPost } | null
}

const rootReducer = combineReducers({
    todosKeys: todosKeysReducer,
    todosEntities: todosEntitiesReducer
})
export default rootReducer