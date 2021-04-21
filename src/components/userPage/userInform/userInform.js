import s from "./UserInform.module.css"

const UserInform = (props) => {
    return (
        <div className={s.userInform}>
            <div className={s.informvalue}>
                <div>Username
                    <div className={s.username}>{props.UserName}</div>
                </div>
                <div>Sex
                    <div className={s.sex}>{props.sex}</div>
                </div>
                <div>City
                    <div className={s.city}>{props.city}</div>
                </div>
                <div>Familystage
                    <div className={s.familystage}>{props.familystage}</div>
                </div>
                <div>Work
                    <div className={props.work}>{props.work}</div>
                </div>
                <div>Family
                    <div className={s.family}>
                     <div>{props.family}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default UserInform;