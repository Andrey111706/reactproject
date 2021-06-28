import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/avatar.png"
import {NavLink} from "react-router-dom";
import {followAPI, unFollowAPI} from "../../API/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>

        {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={() => props.PageOnchange(p)}>{p}</span>
        })}


        {props.users.map(u => {
            return (
                <div>
                    <div>
                        <div className={s.avatar}>
                            <NavLink to={'/userPage/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar} alt="=)"/>
                            </NavLink>
                        </div>

                        <div>{u.name}</div>
                        {u.followed ? <button onClick={() => {
                                unFollowAPI(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.UnFollow(u.id);
                                        }
                                    })
                            }}> Unfollow</button>
                                    : <button onClick={() => {
                                followAPI(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.Follow(u.id);
                                        }
                                    })

                            }}>Follow</button>
                        }

                    </div>

                </div>)

        })}
    </div>
}

export default Users;