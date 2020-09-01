import {IAction, IPost} from "../types";
import {ADD_COUNTER} from "./actions";
import {posts} from "../App"

const todosReducer = (state: Array<IPost> = posts, action: IAction): Array<IPost> => {
    switch (action.type) {
        case ADD_COUNTER:
            const arrays = posts.map((elem) => {
                if (elem.title === action.payload.title) {
                    ++elem.counter
                }
                return elem
            })
            return [...arrays]
        default:
            return state
    }
}
const rootReducer = {
    todos: todosReducer,
}
export default todosReducer