import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post";




const UserPosts = function (props) {
    let Posts = props.PostsData.map(function (post) {
        return <Post id={post.id} username={post.username} time={post.time} text={post.text}/>
    })
    let addPostInput = React.createRef();
    let onChangePostText = () => {
        let text = addPostInput.current.value;
        props.changePostText(text)
    }


    return (
        <div className={s.userPosts}>
            <div className={s.postinput}>
                <fieldset>
                    <legend>New Post</legend>
                    <div id={s.newpost} >
                        <textarea rows="4" name="text" placeholder={'Write, please!'} ref={addPostInput}
                                  onChange={onChangePostText} value={props.postInputValue}/>
                        <button onClick={props.addPost}  value="Отправить" className={s.inputsub}>Отправить</button>
                    </div>
                </fieldset>
            </div>

            <div className={s.allposts}>
                {Posts}

            </div>
        </div>


    )
}
export default UserPosts;