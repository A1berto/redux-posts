import React from 'react'
import {IPost} from "../types"
import Arrow from "../../../redux-posts/src/images/arrow.png"
import Circle from "../images/circle.png"
import LeftImg from "../images/lefImg.png"

interface PostProps {
    post: IPost
    //name: string
    //[key:string]: IPost | string
    handleClick: ()=>void
}

export const Post: React.FunctionComponent<PostProps> = (props) => {
    const {post, handleClick} = props
    //const post = props.post
    return (
        <li style={{listStyle: "none", display: "flex", paddingBottom: "5vh"}}>
            {/*NON POSSO STAMPARE UN OGGETTO
            {post}
            */}
            <img className="imgLeft" src={LeftImg} alt="ImageOfPost"/>

            <div className="centerSide">
                <img className="arrow" src={Arrow} alt="arrowToUpdateCounter" onClick={handleClick} />
                <div className="counter">{post.counter}</div>
            </div>
            <div className="rightSide">
                <div className="title">{post.title}</div>
                <div className="subtitle">{post.subtitle}</div>
                <div className="submitted">Submitted by:
                    <img className="sumbitterImg" src={Circle} alt="Immagine in caricamento"/></div>
            </div>
        </li>
    )
}