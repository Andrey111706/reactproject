import UserPosts from "./UserPosts";
import {connect} from "react-redux";
import {AddPost} from "../../../Redux/UserPageReducer";


let UserPostsContainer = (props) => {
    return (
        <div>
        <UserPosts {...props} />
        </div>)


}
let mapStateToProps = (state) => {
    return {
        postsData: state.UserPage.postsData,
        postInputValue: state.UserPage.postInputValue,
        profile:state.UserPage.profile,
    }
};


export default connect(mapStateToProps, {AddPost})(UserPostsContainer);

