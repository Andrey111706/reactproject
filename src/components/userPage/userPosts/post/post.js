import React from "react";
import s from "./post.module.css";
import UserNotHaveImage from "./../../user-image.jpg"

let Post = function (props) {
    let UserPhoto = () => {
        if (!props.profile.photos || props.profile.photos.small === null) {
            return <img src={UserNotHaveImage} alt='1'/>
        } else {
            return <img src={props.profile.photos.small} alt='1'/>
        }
    }
    return (
        <div className={s.post}>
           <UserPhoto/>
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