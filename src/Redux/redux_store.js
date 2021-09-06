import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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
    app:AppReducer,
    form:formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)
));
 window.store = store
export default store;
