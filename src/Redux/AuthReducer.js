import {getAuthInfo, loginAPI, logOutAPI} from "../API/api";
import {stopSubmit} from "redux-form";

let initState = {
    userId: null,
    email: null,
    login: 21,
    isAuth: false,
    myId:null,          //Доробити нажимання на ОСНОВНУ СТОРІКУ
}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SetUsersData':
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
                myId: action.myId
            }

        default:
            return state;
    }

}
export default AuthReducer;

export const SetUsersData = (userData,myId, isAuth) => {
    return {type: 'SetUsersData', data: userData ,myId:myId,isAuth:isAuth}
};
export const getAuth = () => (dispatch) => {
       return getAuthInfo()
           .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUsersData(response.data.data,response.data.data.id, true))
            }
        })
    }

export const login = (email,password,rememberMe) => {
    return (dispatch) => {
        loginAPI(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
    }
}
export const logOut = () => {
    return (dispatch) => {
        logOutAPI().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUsersData(null,null,false))
            }
        })
    }
}





