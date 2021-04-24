import s from "./Chat.module.css"
import {NavLink} from "react-router-dom"

const ChatItem = (props) => {

    return (<div className={s.chatItem}>
        <NavLink to={"/chat/" + props.id}>{props.name}</NavLink>
    </div>)
}
let     chatUsersData = [
    {id: 1, name: "Viktoria"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Semen"},
    {id: 4, name: "Lorem ipsum dolor sit amet"}
];
let chatMessageData = [
    {id: 1, message: "Шо там Віка"},
    {id: 2, message: "Шо там Ванька"},
    {id: 3, message: "Шо там Гріша"},
    {id: 4, message: "Шо там Олег"},
    {id: 5, message: "Шо там Лорем іпсум долор"},
]

let ChatItems = chatUsersData.map(function (item) {
    return <ChatItem id={item.id} name={item.name}/>
})
let chatMessages = chatMessageData.map(function (item) {
    return (<div className={s.chatMessage} id={item.id}>{item.message}</div>)
})

const Chat = () => {
    return (
        <div className={s.chatContainer}>
            <div className={s.chatList}>
                {ChatItems}
            </div>

            <div className={s.chatContent}>
                {chatMessages}

            </div>
        </div>
    )
}
export default Chat;