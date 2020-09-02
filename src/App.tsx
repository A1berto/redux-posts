import React, {useState, useEffect} from "react";
import './App.css';
import {Post} from "./components/Post";
import {IPost} from "./types";
import Circle from "../../redux-posts/src/images/circle.png"
import LeftImg from "../../redux-posts/src/images/lefImg.png"
import {useDispatch, useSelector} from "react-redux";
import {
    addCounterTodoAction,
    changeSelectedButtonAction,
    setTodosListAction, sortTodoListByCounterAction, sortTodoListBySubmitterAction,
    sortTodoListByTitleAction
} from "./redux/actions";
import {
    postEntitiesValuesByKeysSelector,
    postEntitiesValuesSelector,
    postKeysSelector,
    selectedButtonSelector,
    selectedPostSelector
} from "./redux/selectors"
import Button from "./components/Button";


//le immagini vengono viste come stringe (url), guardare come sono state passate alle props
export const postsMock: Array<IPost> = [{
    id: 1,
    title: "B Haught or Naught",
    subtitle: "High-minded or absent-minded?You decide",
    submitterImg: Circle,
    leftImg: LeftImg,
    counter: 33,
    submitterName: "Yoshi",
},
    {
        id: 2,
        title: "A SuperMajority",
        subtitle: "Earn Point sadsa",
        submitterImg: Circle,
        leftImg: LeftImg,
        counter: 37,
        submitterName: "Naruto"
    }]


const App: React.FunctionComponent = () => {

    const dispatch = useDispatch()
    //const array = useSelector((state : IRootSate ) => state.todosEntities)
    //const secondArray= array ? Object.values(array) : []

    const posts = useSelector(postEntitiesValuesByKeysSelector)
    const selected = useSelector(selectedPostSelector)

    //voglio che quando renderizzo la prima volta i dati ci siano già su redux
    useEffect(() => {
        dispatch(setTodosListAction(postsMock))
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