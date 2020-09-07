import {FETCH_DATA_EXHAUST_TYPE, FETCH_DATA_FLAT_TYPE, FETCH_DATA_SWITCH_TYPE, SET_TODOSLIST_TYPE} from "./actions";
import {ofType} from "redux-observable";
import {IAction} from "../types";
import 'rxjs';
import {exhaustMap, mergeMap, switchMap} from "rxjs/operators";
import {NEVER, Observable} from "rxjs";
import {getToDoList$} from "../requests/request";
import {AjaxResponse} from "rxjs/ajax";


export const fetchDataMergeEpic = (action$: Observable<IAction>) =>
    action$.pipe(
        ofType(FETCH_DATA_FLAT_TYPE),
        mergeMap(() =>
            getToDoList$(onSuccMerge, onErr)
        )
    )

export const fetchDataSwitchEpic = (action$: Observable<IAction>) =>
    action$.pipe(
        ofType(FETCH_DATA_SWITCH_TYPE),
        switchMap(() =>
            getToDoList$(onSuccSwitch, onErr)
        )
    )

export const fetchDataExhaustEpic = (action$: Observable<IAction>) =>
    action$.pipe(
        ofType(FETCH_DATA_EXHAUST_TYPE),
        exhaustMap(() =>
            getToDoList$(onSuccExhaust, onErr)
        )
    )


const onSuccSwitch = (ajaxResponse: AjaxResponse) :IAction[]=> {
    console.log('RESPONSE >>>', ajaxResponse.response)
    return ([{type: SET_TODOSLIST_TYPE, payload: ajaxResponse.response}])
}
const onSuccMerge = (ajaxResponse: AjaxResponse) :IAction[]=> {
    console.log('RESPONSE >>>', ajaxResponse.response)
    return ([
        //{type: 'SET_POSTS_LIST_TYPE', payload: ajaxResponse.response},    //esempio
        //{type: 'SET_COUNTERS_TYPE', payload: ajaxResponse.response},        //esempio
        {type: SET_TODOSLIST_TYPE, payload: ajaxResponse.response}
    ])
}
const onSuccExhaust = (ajaxResponse: AjaxResponse) :IAction[]=> {
    console.log('RESPONSE >>>', ajaxResponse.response)
    return ([{type: SET_TODOSLIST_TYPE, payload: ajaxResponse.response}])
}

const onErr = (err: any) => {
    console.error('ERROR >>>', err)
    return NEVER
}





