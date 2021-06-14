import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import chatPageReducer from "./chatPageReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    chatPage: chatPageReducer,
    UsersPage:UsersReducer,
})
let store = createStore(reducers);

export default store;