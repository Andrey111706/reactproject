import React from "react";
import UserPage from "./UserPage";
import {connect} from "react-redux";
import {getStatus, getUserPage, updateStatus} from "../../Redux/UserPageReducer";
import {withRouter} from "react-router-dom"
import {withAuthComponent} from "../../HOC/withAuth";
import {compose} from "redux";
import {getMyId, getPostInputValue, getProfile, getUserStatus} from "../../Redux/Selectors";


class UserPageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getUserPage(userId)
        this.props.getStatus(userId)

    }

    render() {

        return <>
            <UserPage {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        postInputValue:getPostInputValue(state),
        profile: getProfile(state),
        status: getUserStatus(state),
        userId:getMyId(state),

    }
}
let JustTryToCommit
export default compose(connect(mapStateToProps, {getUserPage,getStatus, updateStatus}),withRouter,
        withAuthComponent)(UserPageContainer)

