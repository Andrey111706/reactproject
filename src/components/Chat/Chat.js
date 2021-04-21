import s from "./Chat.module.css"
import {NavLink} from "react-router-dom"

const ChatItem = (props) => {

return (<div className={s.chatItem}>
    <NavLink to={"/chat/"+props.id}>{props.name}</NavLink>
    </div>)
}

const Chat = () => {
    return (
        <div className={s.chatContainer}>
            <div className={s.chatList}>
                <ChatItem id="1" name="Viktoria"/>
                <ChatItem id="2" name="Ivan"/>
                <ChatItem id="3" name="Semen"/>
                <ChatItem id="4" name="Lorem ipsum dolor sit amet"/>
                <ChatItem id="1" name="Viktoria"/>
                <ChatItem id="2" name="Ivan"/>
                <ChatItem id="3" name="Semen"/>
                <ChatItem id="4" name="Lorem ipsum dolor sit amet"/>
                <ChatItem id="1" name="Viktoria"/>
                <ChatItem id="2" name="Ivan"/>
                <ChatItem id="3" name="Semen"/>
                <ChatItem id="4" name="Lorem ipsum dolor sit amet"/>
                <ChatItem id="4" name="Lorem ipsum dolor sit amet"/>

            </div>

            <div className={s.chatContent}>
                <div className={s.chatMessage}>1234</div>
                <div className={s.chatMessage}>Hello</div>
                <div className={s.chatMessage}>World</div>
            </div>
        </div>
    )
}
export default Chat;