import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post";


const UserPosts = function (props) {

    let Posts = props.PostsData.map(function (post) {
        return <Post id={post.id} username={post.username} time={post.time} text={post.text}/>
    })


    return (
        <div className={s.userPosts}>
            <div className={s.postinput}>
                <fieldset>
                    <legend>New Post</legend>
                    <form id={s.newpost} method="post">
                        <textarea rows="4" name="text" placeholder={'Write, please!'}>1</textarea>
                        <input type="submit" value="Отправить" className={s.inputsub}/>
                    </form>
                </fieldset>
            </div>

            <div className={s.allposts}>
                {Posts}

            </div>
        </div>


    )
}
export default UserPosts;