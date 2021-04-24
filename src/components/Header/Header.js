import React from "react";
import s from "./Header.module.css"

const Header = function (){
    return(
        <header className={`${s.head} head`}>
            <img src='/logo.png' alt='1'/>
        </header>
    )
}
export default Header;