import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './redux/reducers'

import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {fetchDataMergeEpic, fetchDataSwitchEpic,fetchDataExhaustEpic} from "./redux/epics";

/**
 * REDUX DEVTOOLS
 */
const composeEnhancers = typeof (window as any) === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined' ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

/**
 * REDUX OBSERVABLE - EPICS MIDDELWARE
 */
const epicsMiddleware = createEpicMiddleware()


const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(epicsMiddleware)),
)
epicsMiddleware.run(combineEpics(fetchDataMergeEpic, fetchDataSwitchEpic, fetchDataExhaustEpic));


ReactDOM.render(
    <Provider store={store}>
        {console.log(store.getState())}
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
