import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsers, UnFollowAC} from "../../Redux/UsersReducer";
import React from "react";
import * as axios from "axios";


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.SetTotalUsersCount(response.data.totalCount)
            console.log(response.data.items.length)
        })
    }

    PageOnchange = (p) => {
        this.props.SetCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.SetUsers(response.data.items)
        })
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      PageOnchange={this.PageOnchange}
                      users={this.props.users}
                      Follow={this.props.Follow}
                      UnFollow={this.props.UnFollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (id) => {
            dispatch(FollowAC(id))
        },
        UnFollow: (id) => {
            dispatch(UnFollowAC(id))
        },
        SetUsers: (users) => {
            dispatch(SetUsers(users))
        },
        SetCurrentPage: (currentPage) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        SetTotalUsersCount: (currentPage) => {
            dispatch(SetTotalUsersCountAC(currentPage))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)