import UserPosts from "./UserPosts";
import {connect} from "react-redux";
import {AddPost} from "../../../Redux/UserPageReducer";

let mapStateToProps = (state) => {
    return {
        PostsData: state.UserPage.PostsData,
        postInputValue: state.UserPage.postInputValue,
        profile:state.UserPage.profile,
    }
};


export default connect(mapStateToProps, {AddPost})(UserPosts);

