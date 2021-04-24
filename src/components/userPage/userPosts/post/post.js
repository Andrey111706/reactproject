import React from "react";
import s from "./post.module.css";

let Post = function (props) {
    return (
        <div className={s.post}>
            <img src='./user-image.jpg' alt={'user image'}/>
            <div className={s.username}>
                {props.username}
            </div>
            <br/><br/><br/>
            <div>
                {props.text}
            </div>
            <div className={s.timeInPost}>
                {props.time}
            </div>
        </div>


    )
}
export default Post;