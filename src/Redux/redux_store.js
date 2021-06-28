import {combineReducers, createStore} from "redux";
import userPageReducer from "./UserPageReducer";
import chatPageReducer from "./chatPageReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({
    UserPage: userPageReducer,
    chatPage: chatPageReducer,
    UsersPage:UsersReducer,
    AuthReducer:AuthReducer,
})
let store = createStore(reducers);

export default store;