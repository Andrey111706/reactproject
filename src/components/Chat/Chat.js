import s from "./Chat.module.css"
import ChatUsersItem from "./ChatUsersItem/ChatUsersItem";


const Chat = (props) => {

    let ChatUsers = props.chatUsersData.map(function (item) {
        return <ChatUsersItem id={item.id} name={item.name}/>
    })
    let chatMessages = props.chatMessageData.map(function (item) {
        return (<div className={s.chatMessage} id={item.id}>{item.message}</div>)
    })

    return (
        <div className={s.chatContainer}>
            <div className={s.chatList}>
                {ChatUsers}
            </div>

            <div className={s.chatContent}>
                {chatMessages}

            </div>
        </div>
    )
}
export default Chat;