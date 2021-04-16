import React from "react";
import s from "./Navigation.module.css"
const Navigation = function () {
    return (
        <nav className={`${s.navigation}  navi`}>
            <div><a href={'#1'}>My page</a></div>
            <div><a href={'#2'}>Feed</a></div>
            <div><a href={'#3'}>Chat</a></div>
            <div><a href={'#4'}>Photo</a></div>
            <div><a href={'#5'}>Music</a></div>
            <div><a href={'#6'}>Settings</a></div>
        </nav>
    )
}
export default Navigation;