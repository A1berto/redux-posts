import React, {useState, useEffect} from "react";
import './App.css';
import {Post} from "./components/Post";
import {IPost} from "./types";
import Circle from "../../redux-posts/src/images/circle.png"
import LeftImg from "../../redux-posts/src/images/lefImg.png"
import {useDispatch, useSelector} from "react-redux";
import {addCounterTodoAction, setTodosListAction} from "./redux/actions";
import {IRootSate} from "./redux/reducers";
import {createSelector} from "reselect";
import {postEntitiesValuesSelector} from "./redux/selectors"




//le immagini vengono viste come stringe (url), guardare come sono state passate alle props
export const postsMock: Array<IPost> = [{
    id: 1,
    title: "Haught or Naught",
    subtitle: "High-minded or absent-minded?You decide",
    submitterImg: Circle,
    leftImg: LeftImg,
    counter: 33
},
    {
        id: 2,
        title: "SuperMajority",
        subtitle: "Earn Point sadsa",
        submitterImg: Circle,
        leftImg: LeftImg,
        counter: 27
    }]



const App: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    //const array = useSelector((state : IRootSate ) => state.todosEntities)
    //const secondArray= array ? Object.values(array) : []

    const posts = useSelector(postEntitiesValuesSelector)
    console.log("TODOSENTI:", posts)

    //voglio che quando renderizzo la prima volta i dati ci siano già su redux
    useEffect(()=>{
        dispatch(setTodosListAction(postsMock))                     //fare con i dati delle fetch
    },[])

    return <>{
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

    {/*
    todos.map(todo=> <Post title={todo.title}.../>)
    */
    }

    {/*<Post post={posts[0]}
              //name="ciao"
              //oggetto={{title: "titoloMio"}}/>
        <Post post={posts[1]}
              //name="ciao"
              //oggetto={{title: "titoloMio"}}/></>*/
    }

}


export default App;
