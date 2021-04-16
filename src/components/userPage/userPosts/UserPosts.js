import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post"

const UserPosts = function () {
    return (
        <div className={s.userPosts}>
            <div className={s.postinput}>
                <fieldset>
                    <legend>New Post</legend>
                    <form id={s.newpost} method="post">
                        <textarea rows="4"  name="text" placeholder={'Write, pls!'}>1</textarea>
                        <input type="submit" value="Отправить"/>
                    </form>
                </fieldset>
            </div>

            <div className={s.allposts}>
               <Post />
                <Post />
                <Post />
                <Post />


            </div>
        </div>


    )
}
export default UserPosts;