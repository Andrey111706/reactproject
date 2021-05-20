import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../Redux/mainPageReducer";
import UserPosts from "./UserPosts";


const UserPostsConteiner = function (props) {
    let changePostText = (text) => {
        props.store.dispatch(ChangePostTextActionCreator(text))
    }

    let addPost = () => props.store.dispatch(AddPostActionCreator);

    return <UserPosts changePostText={changePostText}
                      addPost={addPost}
                      PostsData={props.store.getState().mainPage.PostsData}
                      postInputValue={props.store.getState().mainPage.postInputValue}
    />

}
export default UserPostsConteiner;
