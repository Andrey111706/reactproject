import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import chatPageReducer from "./chatPageReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    chatPage: chatPageReducer
})
let store = createStore(reducers);

export default store;