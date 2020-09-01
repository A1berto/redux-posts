import React, {useState} from "react";
import './App.css';
import {Post} from "./components/Post";
import {IAction, IPost} from "./types";
import Circle from "../../redux-posts/src/images/circle.png"
import LeftImg from "../../redux-posts/src/images/lefImg.png"
import {useDispatch, useSelector} from "react-redux";
import {ADD_COUNTER, addCounterTodoAction} from "./redux/actions";

//le immagini vengono viste come stringe (url), guardare come sono state passate alle props
export const posts: Array<IPost> = [{
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
    const [todos, setTodos] = useState(posts)
    const [todo, setCounterTodo] = useState()
    const dispatch = useDispatch()
    const array = useSelector(state => state)

    const handleChange = (e: Event) => {
        setCounterTodo(e.target)
    }
    return <>{
        //le parentesi graffe mi servono per scrivere codice tsx dentro jsx (per poter scrivere codice js)
        todos.map((todo, index) =>
            <Post post={todo}
                  key={index}
                  handleClick={() => {
                      dispatch(addCounterTodoAction(todo))
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
