
import {AddMessageActionCreator, ChangeTextActionCreator} from "../../Redux/chatPageReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        chatUsersData:state.chatPage.chatUsersData,
        chatMessageData:state.chatPage.chatMessageData,
        textOnchangeValue:state.chatPage.textValue
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(AddMessageActionCreator)},
        textChange: (text) => {dispatch(ChangeTextActionCreator(text))}
    }
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;