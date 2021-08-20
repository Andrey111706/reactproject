import React from "react";
import s from "./Chat.module.css"
import ChatUsersItem from "./ChatUsersItem/ChatUsersItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Utilities/FormControls/FormControls";
import {MaxLength, RequireField} from "../../Utilities/Validators";


const Chat = (props) => {
    let ChatUsers = props.chatUsersData.map(function (item) {
        return <ChatUsersItem id={item.id} name={item.name}/>
    })
    let chatMessages = props.chatMessageData.map(function (item) {
        return (<Message className={s.chatMessage} id={item.id} message={item.message} my={item.my}/>)
    });
    let addMessageToDialog = (values) => {
        props.AddMessage(values.text)
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
                    <ChatNewMessageReduxForm onSubmit={addMessageToDialog}/>
                </div>
            </div>

        </div>
    )
}
const MaxLength50 = MaxLength(50)
let ChatNewMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="text" placeholder={'Write, please!'}
            validate={[RequireField,MaxLength50]}/>
            <div className={s.send}>
                <button>Send</button>
                <button>Reset</button>
            </div>
        </form>
    )
}
let ChatNewMessageReduxForm = reduxForm({form: 'ChatNewMessageForm'})(ChatNewMessageForm)


export default Chat;