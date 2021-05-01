import React from "react";
import s from "./Header.module.css"
import FriendActiveItem from "./FriendActiveItem/Header";

const Header = function () {
    return (
        <header className={`${s.head} head`}>
            <div className={s.imageHolder}><img src='/logo.png' alt='1'/></div>

            <div className={s.ActiveUsersText}>Friends online: </div>
            <div className={s.friendsActive}>
                <FriendActiveItem />
                <FriendActiveItem />
                <FriendActiveItem />
                <FriendActiveItem />
                <FriendActiveItem />



            </div>
        </header>
    )
};
export default Header;