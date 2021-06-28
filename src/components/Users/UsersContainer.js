import {connect} from "react-redux";
import Users from "./Users";
import {Follow, SetCurrentPage, SetIsLoading, SetTotalUsersCount, SetUsers, UnFollow} from "../../Redux/UsersReducer";
import React from "react";
import loader from "../../assets/loader/loader.gif";
import {getUsers} from "../../API/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.SetIsLoading(true)
        getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.SetIsLoading(false)
            this.props.SetUsers(response.data.items)
            this.props.SetTotalUsersCount(response.data.totalCount)
        })
    }

    PageOnchange = (p) => {
        this.props.SetCurrentPage(p);
        this.props.SetIsLoading(true)
        getUsers(p,this.props.pageSize).then(response => {
            this.props.SetUsers(response.data.items)
            this.props.SetIsLoading(false)
        })
    }

    render() {


        return <>
            {this.props.isLoading ? <img src={loader} alt={'loader'}/> : <div/>}
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
        isLoading: state.UsersPage.isLoading,
    }
}

export default connect(mapStateToProps, {
    Follow,
    UnFollow,
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetIsLoading,
})(UsersContainer)