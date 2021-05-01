import s from "./../Chat.module.css"
import Whereuser from "./myornotmineMessage/myornotMine";


let Message = (props) => {
    return (
        <div className={s.message}>
            <Whereuser my={props.my} />
            <div className={s.userText}>{props.message}</div>
        </div>


    )

}


export default Message;