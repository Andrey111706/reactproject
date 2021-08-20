import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {

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
export default connect(mapStateToProps, {logOut})(HeaderContainer);