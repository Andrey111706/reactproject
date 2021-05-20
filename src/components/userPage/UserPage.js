import React from "react";
import s from "./UserPage.module.css"
import UserInform from "./userInform/userInform";
import UserPostsConteiner from "./userPosts/UserPostsConteiner";


const UserPage = function (props) {
    return (
        <div className={`${s.userPage} userPage`}>

            <div className={s.userimage}>
                <img src='./user-image.jpg' alt=''/>
            </div>

            <UserInform UserName="Black Jack" sex="Horse" city="London"
                        familystage="Insamenator" work="farm"
                        family="horse-brother"/>

            <div className={s.userContent}>
                <div className={s.userImage}>user-image</div>
                <div className={s.userMusic}>user-music</div>
                <div className={s.userVideo}>user-video</div>
            </div>

            <UserPostsConteiner store={props.store}/>

        </div>
    )
}
export default UserPage;
