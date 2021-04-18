import React from "react";
import UserPosts from "./userPosts/UserPosts";
import s from "./UserPage.module.css"

const UserPage = function (props) {
    return (
        <div className={`${s.userPage} userPage`}>

            <div className={s.userimage}>
                <img src='./user-image.jpg' alt=''/>
            </div>

            <div className={s.userInform}>
                <div className={s.informvalue}>
                    <div>Username
                        <div  className={s.username}>Jack Black</div>
                    </div>
                    <div>Sex
                        <div className={s.sex}>Horse</div>
                    </div>
                    <div>City
                        <div className={s.city}>London</div>
                    </div>
                    <div>Familystage
                        <div className={s.familystage}>Inseminator</div>
                    </div>
                    <div>Work
                        <div className={s.work}>Farm</div>
                    </div>
                    <div>Family
                        <div className={s.sisbro}>
                            <div>horse-brother</div>
                            <div>horse-sister</div>
                        </div>
                    </div>
                </div>


            </div>

            <div className={s.userContent}>
                <div className={s.userImage}>user-image</div>
                <div className={s.userMusic}>user-music</div>
                <div className={s.userVideo}>user-video</div>
            </div>

            <UserPosts />

        </div>
    )
}
export default UserPage;