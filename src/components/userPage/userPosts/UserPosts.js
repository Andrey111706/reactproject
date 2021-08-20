import React from "react";
import s from "./UserPosts.module.css"
import Post from "./post/post";
import {Field, reduxForm} from "redux-form";
import {MaxLength, RequireField} from "../../../Utilities/Validators";
import {Textarea} from "../../../Utilities/FormControls/FormControls";


const UserPosts = function (props) {
    let Posts = props.PostsData.map(function (post) {
        return <Post id={post.id} username={post.username} time={post.time} text={post.text} profile={props.profile}/>
    });
let addNewPostToRedux = (values)=>{
    props.AddPost(values.text)
}


    return (
        <div>
            <div>
                <fieldset>
                    <legend>New Post</legend>
                    <div className={s.newPost}>
                    <AddUserPostReduxForm onSubmit={addNewPostToRedux}/>
                    </div>
                </fieldset>
            </div>

            <div className={s.allPosts}>
                {Posts}

            </div>
        </div>
    )

}
const MaxLength25 = MaxLength(25)
let AddUserPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field component={Textarea} rows="4" name="text" placeholder={'Write, please!'}
                validate={[RequireField, MaxLength25]}/>
            <button className={s.inputSub}>Отправить</button>
        </form>
    )
}
let AddUserPostReduxForm = reduxForm({form:'AddUserPostForm'})(AddUserPostForm)
export default UserPosts;