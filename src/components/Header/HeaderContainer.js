import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {SetUsersData} from "../../Redux/AuthReducer";
import {getAuthInfo} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuthInfo().then(response => {
            if (response.data.resultCode === 0) {
                this.props.SetUsersData(response.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.AuthReducer.isAuth,
        userId: state.AuthReducer.userId,
        email: state.AuthReducer.email,
        login: state.AuthReducer.login,

    })
}
export default connect(mapStateToProps, {SetUsersData})(HeaderContainer);