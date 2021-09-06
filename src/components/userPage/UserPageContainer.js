import React from "react";
import UserPage from "./UserPage";
import {connect} from "react-redux";
import {getStatus, getUserPage} from "../../Redux/UserPageReducer";
import {withRouter} from "react-router-dom"
import {withAuthComponent} from "../../HOC/withAuth";
import {compose} from "redux";
import {getMyId, getProfile} from "../../Redux/Selectors";


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
        return (
            <>
                <UserPage {...this.props} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        userId: getMyId(state),
    }
}

export default compose(connect(mapStateToProps, {getUserPage, getStatus}), withRouter,
    withAuthComponent)(UserPageContainer)

