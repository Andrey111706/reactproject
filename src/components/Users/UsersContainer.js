import {connect} from "react-redux";
import Users from "./Users";
import {
    FollowAC,
    SetCurrentPageAC,
    SetIsLoadingAC,
    SetTotalUsersCountAC,
    SetUsers,
    UnFollowAC
} from "../../Redux/UsersReducer";
import React from "react";
import * as axios from "axios";
import loader from "../../assets/loader/loader.gif";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.SetIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetIsLoading(false)
            this.props.SetUsers(response.data.items)
            this.props.SetTotalUsersCount(response.data.totalCount)
            console.log(response.data.items.length)
        })
    }

    PageOnchange = (p) => {
        this.props.SetCurrentPage(p);
        this.props.SetIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.SetIsLoading(false)
        })
    }

    render() {


        return <>
            {this.props.isLoading ? <img src={loader} alt={'loader'}/>: <div/>}
            <Users currentPage={this.props.currentPage}
                   PageOnchange={this.PageOnchange}
                   users={this.props.users}
                   Follow={this.props.Follow}
                   UnFollow={this.props.UnFollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
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
        isLoading:state.UsersPage.isLoading,
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
        SetIsLoading: (isLoading) => {
            dispatch(SetIsLoadingAC(isLoading))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)