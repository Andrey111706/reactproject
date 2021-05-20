import React from "react";
import {AddMessageActionCreator, ChangeTextActionCreator} from "../../Redux/chatPageReducer";
import Chat from "./Chat";


const ChatContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreator);
    }
    let textchange = (text) => {
        props.store.dispatch(ChangeTextActionCreator(text))
    }
    return <Chat addMessage={addMessage}
                 textchange={textchange}
                 store={props.store}
                 chatUsersData={props.store.getState().chatPage.chatUsersData}
                 chatMessageData={props.store.getState().chatPage.chatMessageData}/>
}

export default ChatContainer;