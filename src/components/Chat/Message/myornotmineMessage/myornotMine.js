import s from "./../../Chat.module.css"

let Whereuser = function (props) {

    if (props.my==true) {
        return (
            <div className={`${s.userInfo} ${s.myMessage}`}>
                <div className={s.imageHolder}><img className={s.userImage} src="/tolya.jpg" alt=""/></div>
                <div className={s.userName}>Толя Постебайло</div>
            </div>
        )
    }
    else{
        return (
            <div className={`${s.userInfo} ${s.notmyMessage}`}>
                <div className={s.imageHolder}><img className={s.userImage} src="/tolya.jpg" alt=""/></div>
                <div className={s.userName}>Толя Постебайло</div>
            </div>
        )

    }
}

export default Whereuser