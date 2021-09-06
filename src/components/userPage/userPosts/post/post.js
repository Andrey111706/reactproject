import React from "react";
import s from "./post.module.css";
import UserNotHaveImage from "./../../user-image.jpg"

let Post = function (props) {

    return (
        <div className={s.post}>
            {(!props.profile.photos || props.profile.photos.small === null)
                  ?<img src={UserNotHaveImage} alt='1'/>
                  :<img src={props.profile.photos.small} alt='1'/>
            }
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