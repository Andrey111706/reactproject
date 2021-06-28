import React from "react";
import s from "./Header.module.css"
import FriendActiveItem from "./FriendActiveItem/Header";
import {NavLink} from "react-router-dom";

const Header = function (props) {


    return (
        <header className={`${s.head} head`}>
            <div className={s.imageHolder}><img src='/logo.png' alt='1'/></div>

            <div>Friends online:</div>
            <div className={s.friendsActive}>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
                <FriendActiveItem/>
            </div>
            <div className={s.loginHolder}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
};
export default Header;