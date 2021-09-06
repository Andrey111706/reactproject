import React from "react";
import s from "./../Header.module.css"

const FriendActiveItem = function (){
    return(
                <div className={s.friendActiveItem}>
                    <img src='/tolya.jpg' alt=""/>
                    <div className={s.activeUserName}>Толя Постебайло</div>
                </div>
    )
};
export default FriendActiveItem;