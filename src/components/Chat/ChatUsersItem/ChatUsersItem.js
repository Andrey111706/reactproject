import s from "./../Chat.module.css"
import {NavLink} from "react-router-dom"

const ChatUsersItem = (props) => {

    return (<div className={s.chatItem}>
        <NavLink to={"/chat/" + props.id}>{props.name}</NavLink>
    </div>)
}

export default ChatUsersItem;