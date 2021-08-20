import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = function () {
    return (
        <nav className={`${s.navigation}  navigation`}>
            <div><NavLink to='/userPage/18007' activeClassName={s.active}>My page</NavLink></div>
            <div><NavLink to='/feed' activeClassName={s.active}>Feed</NavLink></div>
            <div><NavLink to='/users' activeClassName={s.active}>Users</NavLink></div>
            <div><NavLink to='/chat' activeClassName={s.active}>Chat</NavLink></div>
            <div><NavLink to='/photo' activeClassName={s.active}>Photo</NavLink></div>
            <div><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    )
}
export default Navigation;