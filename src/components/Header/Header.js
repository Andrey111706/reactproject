import React from "react";
import s from "./Header.module.css"
import FriendActiveItem from "./FriendActiveItem/activeFriends";
import {NavLink} from "react-router-dom";
import logo from './../../assets/logo.png'

const Header = function (props) {


    return (
        <header className={`${s.head} headGrid`}>
            <div className={s.imageHolder}><img src={logo} alt='1'/></div>
            <div>Friends online:</div>
            <div className={s.friendsActive}>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
            </div>
            <div className={s.loginHolder}>
                {props.isAuth ?<div>{props.login} - <button onClick={props.logOut}>Logout</button></div>
                              :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
};
export default Header;