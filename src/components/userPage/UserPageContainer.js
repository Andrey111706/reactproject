import React from "react";
import UserPage from "./UserPage";
import {connect} from "react-redux";
import {SetUserPage} from "../../Redux/UserPageReducer";
import {withRouter} from "react-router-dom"
import {userPageAPI} from "../../API/api";


class UserPageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        userPageAPI(userId).then(response => {
            this.props.SetUserPage(response.data)


        })

    }

    render() {
        return <>
            <UserPage {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        postInputValue: state.UserPage.postInputValue,
        profile: state.UserPage.profile,
    }
}

let userPageContainerWithRouter = withRouter(UserPageContainer);
export default connect(mapStateToProps, {SetUserPage})(userPageContainerWithRouter);
