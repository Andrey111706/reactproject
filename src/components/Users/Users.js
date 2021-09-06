import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/avatar.png"
import {NavLink} from "react-router-dom";
import Paginator from "../../Utilities/Paginator";


const Users = (props) => {


    return (
        <div>
        <Paginator {...props}/>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <div>
                            <div className={s.avatar}>
                                <NavLink to={'/userPage/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : avatar} alt="=)"/>
                                </NavLink>
                            </div>

                            <div>{u.name}</div>
                            <button disabled={props.fetchUserInState.some(id => id === u.id)}
                                    onClick={() => {
                                        u.followed ? props.unFollow(u.id) :props.Follow(u.id)}}>

                                {u.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>

                    </div>
                )

            })}
            <Paginator {...props}/>
        </div>
    )
}

export default Users;