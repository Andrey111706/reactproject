import React from "react";
import s from "./UserPage.module.css"
import UserInform from "./userInform/userInform";
import UserPostsContainer from "./userPosts/UserPostsContainer"
import UserNotHaveImage from "./user-image.jpg"


const UserPage = function (props) {
    let UserPhoto = () => {
        if (!props.profile.photos || props.profile.photos.large === null) {
            return <img src={UserNotHaveImage} alt='1'/>
        } else {
            return <img src={props.profile.photos.large} alt='1'/>
        }
    }
    return (
        <div className={`${s.userPage} userPage`}>

            <div className={s.userImage}>
                <UserPhoto/>
            </div>

            <UserInform UserName={props.profile.fullName} sex="Horse" city="London"
                        familystage="Inseminate" work="farm"
                        family="horse-brother"/>
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





