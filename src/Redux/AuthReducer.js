import {getAuthInfo, loginAPI, logOutAPI} from "../API/api";
import {stopSubmit} from "redux-form";
//CONSt CASES
const SET_USER_DATA =  'SetUserDataInAuthReducer'

let initState = {
    userId: null,
    email: null,
    isAuth: false,
    myId:null,
}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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


//AC
export const setUsersData = (userData, myId, isAuth) => {
    return {type: SET_USER_DATA, data: userData ,myId:myId,isAuth:isAuth}
};

//THUNKS
export const getAuth = () => async(dispatch) => {
       let response = await getAuthInfo()
            if (response.data.resultCode === 0) {
                dispatch(setUsersData(response.data.data,response.data.data.id, true))
            }

    }
    
export const login = (email,password,rememberMe) => async dispatch => {
       let response =  await loginAPI(email,password,rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login',{_error:message}))
            }
    }

export const logOut = () => async dispatch => {
      let response = await logOutAPI()
            if (response.data.resultCode === 0) {
                dispatch(setUsersData(null,null,false))
            }
    }





