import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post";

let PostsData = [
    {
        id:1,
        username: "Jack Black",
        time:"14:40 11.04.2021",
        text:"lorem"
    },
    {
        id:2,
        username: "Jack Black",
        time:"14:40 11.04.2021",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error!"
    },
]

    let Posts = PostsData.map(function (post) {
        return <Post id={post.id} username={post.username} time={post.time} text={post.text}/>
    })


const UserPosts = function () {
    return (
        <div className={s.userPosts}>
            <div className={s.postinput}>
                <fieldset>
                    <legend>New Post</legend>
                    <form id={s.newpost} method="post">
                        <textarea rows="4" name="text" placeholder={'Write, please!'}>1</textarea>
                        <input type="submit" value="Отправить"/>
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