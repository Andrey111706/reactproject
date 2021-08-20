import {connect} from "react-redux";
import Users from "./Users";
import {fetchUser, Follow, getUsersThunkCreator, SetCurrentPage, unFollow} from "../../Redux/UsersReducer";
import React from "react";
import loader from "../../assets/loader/loader.gif";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    PageOnchange = (p) => {

        this.props.getUsersThunkCreator(p, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isLoading ? <img src={loader} alt={'loader'}/> : <div/>}
            <Users currentPage={this.props.currentPage}
                   PageOnchange={this.PageOnchange}
                   users={this.props.users}
                   Follow={this.props.Follow}
                   unFollow={this.props.unFollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   fetchUserInState={this.props.fetchUserInState}
                   fetchUser={this.props.fetchUser}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading,
        fetchUserInState: state.UsersPage.fetchUser,

    }
}

export default connect(mapStateToProps, {
    Follow,
    unFollow,
    SetCurrentPage,
    fetchUser,
    getUsersThunkCreator,
})(UsersContainer)