import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Utilities/FormControls/FormControls";
import {MaxLength, RequireField} from "../../Utilities/Validators";
import React from "react";

const MaxLength50 = MaxLength(50)
let ChatNewMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="text" placeholder={'Write, please!'}
                   validate={[RequireField, MaxLength50]}/>
            <div>
                <button>Send</button>
                <button>Reset</button>
            </div>
        </form>
    )
}
const ChatNewMessageReduxForm = reduxForm({form: 'ChatNewMessageForm'})(ChatNewMessageForm)
export default ChatNewMessageReduxForm;