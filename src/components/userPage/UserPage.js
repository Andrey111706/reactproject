import React from "react";
import s from "./UserPage.module.css"
import UserPostsContainer from "./userPosts/UserPostsContainer"
import UserNotHaveImage from "./user-image.jpg"
import UserInformContainer from "./userInform/userInformContainer";


const UserPage = function (props) {

    return (
        <div className={`${s.userPage} userPage`}>

            <div className={s.userImage}>
                {(!props.profile.photos || props.profile.photos.large === null)
                    ? <img src={UserNotHaveImage} alt='1'/>
                    : <img src={props.profile.photos.large} alt='1'/>
                }
            </div>

            <UserInformContainer />
            <div className={s.userContent}>
                <div>user-image</div>
                <div>user-music</div>
                <div>user-video</div>
            </div>

            <UserPostsContainer photos={props.profile.photos}/>

        </div>
    )
}
export default UserPage;





