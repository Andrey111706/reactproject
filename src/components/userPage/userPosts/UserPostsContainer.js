import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../Redux/mainPageReducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostsData: state.mainPage.PostsData,
        postInputValue: state.mainPage.postInputValue,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changePostText: (text) => {
            dispatch(ChangePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(AddPostActionCreator)
        }
    }
};

const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);
export default UserPostsContainer;
