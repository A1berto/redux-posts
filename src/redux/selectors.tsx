import {IRootSate} from "./reducers";
import {createSelector} from 'reselect'
import {IPost} from "../types";

const rootSelector = ((state: IRootSate) => state)

const postEntitiesSelector = createSelector(
    rootSelector,
    ((rootState: IRootSate) => rootState.todosEntities)                 //questo mi ritorna {1:{},2:{}}
)
export const selectedButtonSelector = createSelector(
    rootSelector,
    ((selectedButton)=>selectedButton.selectedButton)
)

export const postKeysSelector = createSelector(
    rootSelector,
    ((rootState: IRootSate) => rootState.todosKeys)
)

export const postEntitiesValuesSelector = createSelector(
    postEntitiesSelector,
    ((postEntitiesSelectorState) => Object.values(postEntitiesSelectorState))
)
export const postEntitiesValuesByKeysSelector = createSelector(
    postKeysSelector,
    postEntitiesSelector,
    (keys, entities): Array<IPost> => keys.map(key => entities[key])
)//keys è il risultato del primo selector, posso chiamarlo come voglio

export const selectedPostSelector = createSelector(
    rootSelector,
    ((rootState:IRootSate)=> rootState.selectedButton)
)


//chiamare diversi select per visualizzare diversi arrayby...
// ritornare solamente l'array di [1,2,3,4]