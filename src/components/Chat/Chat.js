import React from "react";
import s from "./Chat.module.css"
import ChatUsersItem from "./ChatUsersItem/ChatUsersItem";
import Message from "./Message/Message";


const Chat = (props) => {
    let ChatUsers = props.chatUsersData.map(function (item) {
        return <ChatUsersItem id={item.id} name={item.name}/>
    })
    let chatMessages = props.chatMessageData.map(function (item) {
        return (<Message className={s.chatMessage} id={item.id} message={item.message} my={item.my}/>)
    });
    let sendMessage = React.createRef();


    let ontextchange = () => {
        let text = sendMessage.current.value;
        props.textChange(text)
        debugger
    }
    return (
        <div className={s.chatContainer}>
            <div className={s.chatList}>
                {ChatUsers}
            </div>

            <div className={s.chatContent}>
                <div className={s.messagesHolder}>
                    {chatMessages}

                </div>
                <div className={s.sendMessage}>
                    <textarea onChange={ontextchange} name="text" placeholder={'Write, please!'} ref={sendMessage}
                    value={props.textOnchangeValue}/>
                    <div className={s.send}>
                        <button onClick={props.addMessage}>Send</button>
                        <button>Reset</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat;