import {applyMiddleware, combineReducers, createStore} from "redux";
import userPageReducer from "./UserPageReducer";
import chatPageReducer from "./chatPageReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    UserPage: userPageReducer,
    chatPage: chatPageReducer,
    UsersPage:UsersReducer,
    AuthReducer:AuthReducer,
    form:formReducer,
    app:AppReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;