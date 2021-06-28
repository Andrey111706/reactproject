import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post";


const UserPosts = function (props) {
    let Posts = props.PostsData.map(function (post) {
        return <Post id={post.id} username={post.username} time={post.time} text={post.text} profile={props.profile}/>
    })
    let addPostInput = React.createRef();
    let onChangePostText = () => {
        let text = addPostInput.current.value;
        props.ChangePostText(text)
    }


    return (
        <div>
            <div>
                <fieldset>
                    <legend>New Post</legend>
                    <div id={s.newpost} >
                        <textarea rows="4" name="text" placeholder={'Write, please!'} ref={addPostInput}
                                  onChange={onChangePostText} value={props.postInputValue}/>
                        <button onClick={props.AddPost}  value="Отправить" className={s.inputsub}>Отправить</button>
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