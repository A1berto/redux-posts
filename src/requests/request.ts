import {ajax, AjaxResponse} from "rxjs/ajax";
import {catchError, mergeMap} from "rxjs/operators";
import {Observable} from "rxjs";

const URL = " https://demo0465378.mockable.io"

export const getToDoList$ = (
    onSucc: (ajaxResponse: AjaxResponse) => any,
    onErr: (err: any) => any,
): Observable<any> => {
    return ajax(URL).pipe(
        mergeMap(onSucc),
        catchError(onErr),
    )
}

