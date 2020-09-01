import {useSelector} from "react-redux";
import {IRootSate} from "./reducers";
import {createSelector} from 'reselect'
import {IPost} from "../types";

const rootSelector = ((state: IRootSate) => state)

const postEntitiesSelector = createSelector(
    rootSelector,
    ((rootState: IRootSate) => rootState.todosEntities)                 //questo mi ritorna {1:{},2:{}}
)

export const postKeysSelector = createSelector(
    rootSelector,
    ((rootState: IRootSate) => rootState.todosKeys)
)

export const postEntitiesValuesSelector = createSelector(
    postEntitiesSelector,
    ((postEntitiesSelectorState: { [p: number]: IPost } | null) =>
        postEntitiesSelectorState ? Object.values(postEntitiesSelectorState) : [])
)


//chiamare diversi select per visualizzare diversi arrayby...
// ritornare solamente l'array di [1,2,3,4]