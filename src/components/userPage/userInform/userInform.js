import s from "./UserInform.module.css"
import ProfileStatus from "./ProfileStatus.js"

const UserInform = (props) => {
    return (
        <div className={s.userInform}>
            <div className={s.status}>
                <ProfileStatus status={props.status} getStatus={props.getStatus} updateStatus={props.updateStatus}/>

            </div>
            <div className={s.informValue}>
                <div>Username
                    <div >{props.UserName}</div>
                </div>
                <div>Sex
                    <div >{props.sex}</div>
                </div>
                <div>City
                    <div >{props.city}</div>
                </div>
                <div>Family Stage
                    <div >{props.familystage}</div>
                </div>
                <div>Work
                    <div>{props.work}</div>
                </div>
                <div>Family
                    <div>
                     <div>{props.family}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default UserInform;