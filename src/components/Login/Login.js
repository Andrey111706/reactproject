import {Field, reduxForm} from "redux-form";
import {Input} from "../../Utilities/FormControls/FormControls";
import {MaxLength, RequireField} from "../../Utilities/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "./../../Utilities/FormControls/FormControls.module.css"


const MaxLength50 = MaxLength(50);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"email"} component={Input} name="email"
                   validate={[RequireField, MaxLength50]}/>
            <Field placeholder={"password"} component={Input} name="password" type={"password"}
                   validate={[RequireField, MaxLength50]}/>
            <Field type={"checkbox"} component={Input} name="rememberMe"/>

            {props.error && <div className={s.formAllError}>{props.error}</div>}
            Remember
            <button>Send</button>
        </form>
    )
};
let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    }
    if (props.isAuth)   {
        return <Redirect to={'/userPage'}/>;
    }
    return (

        <div>
            <div>Login Page</div>
            <LoginReduxForm onSubmit={onSubmit}/>


        </div>

    )
}
const mapStateToProps = (state) => ({
        isAuth:state.AuthReducer.isAuth
})
export default connect(mapStateToProps, {login})(Login);


