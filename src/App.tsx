import React, {useEffect} from "react";
import './App.css';
import {Post} from "./components/Post";
import {useDispatch, useSelector} from "react-redux";
import {
    addCounterTodoAction,
    changeSelectedButtonAction,
    FETCH_DATA_SWITCH_TYPE,
    sortTodoListByCounterAction,
    sortTodoListBySubmitterAction,
    sortTodoListByTitleAction
} from "./redux/actions";
import {postEntitiesValuesByKeysSelector, selectedPostSelector} from "./redux/selectors"
import Button from "./components/Button";


//le immagini vengono viste come stringe (url), guardare come sono state passate alle props


//TODO chiamate per prendere i posts. Faccio partire la chiamata con un bottone. Ogni volta che clicco mi chiama i dati.
//Fare la prova con i tre map: switchMap, flatMap, exhaustMap.
//fare tre epic: fetchDataExhaustEpic, fetchDataSwitchEpic
//clicco handleclick, parte


const App: React.FunctionComponent = () => {

    const dispatch = useDispatch()
    //const array = useSelector((state : IRootSate ) => state.todosEntities)
    //const secondArray= array ? Object.values(array) : []

    const posts = useSelector(postEntitiesValuesByKeysSelector)
    const selected = useSelector(selectedPostSelector)

    //voglio che quando renderizzo la prima volta i dati ci siano già su redux
    useEffect(() => {
        //dispatch(setTodosListAction(postsMock))           Adesso aspetto la fetch e chiamo dopo i dati.
        dispatch(changeSelectedButtonAction(0)) //fare con i dati delle fetch
    }, [])


    const sortByTitle = () => {
        dispatch(changeSelectedButtonAction(1))
        dispatch(sortTodoListByTitleAction(posts))
    }
    const sortByCounter = () => {
        dispatch(changeSelectedButtonAction(2))
        dispatch(sortTodoListByCounterAction(posts))
    }
    const sortBySubscriber = () => {
        dispatch(changeSelectedButtonAction(3))
        dispatch(sortTodoListBySubmitterAction(posts))
    }
    const handleClick = () => {
        /*getToDoList().then(response => {
            console.log("Response: ", response)
            dispatch(setTodosListAction(response))})*/
        dispatch({type: FETCH_DATA_SWITCH_TYPE})
    }
    return <>
        <Button
            sortType="Title"
            handleClick={() => sortByTitle()}
            number={1}
            selected={selected}
        />
        <Button
            sortType="Counter"
            handleClick={() => sortByCounter()}
            number={2}
            selected={selected}
        />
        <Button
            sortType="Subscriber"
            handleClick={() => sortBySubscriber()}
            number={3}
            selected={selected}
        />
        <button id="btn" onClick={() => handleClick()}>click</button>

        {
            //le parentesi graffe mi servono per scrivere codice tsx dentro jsx (per poter scrivere codice js)

            posts.map((todo, index) =>
                <Post post={todo}
                      key={index}
                      handleClick={() => {
                          dispatch(addCounterTodoAction(todo.id))
                      }}
                />)
        }
    </>
}


export default App;


//[1:{},2:{}]