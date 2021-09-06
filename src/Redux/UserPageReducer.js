import {getStatusAPI, setStatusAPI, userPageAPI} from "../API/api";
//CONST CASES

const ADD_POST_TO_USER_PAGE =  'AddPostToUserPage'
const SET_USER_PAGE_INFORMATION = 'SetUserPageInfo';
const SET_USER_STATUS =  'SetStatus'

let initState = {
    postsData: [
        {
            id: 1,
            username: "Jack Black",
            time: "14:40 11.04.2021",
            text: "Hi))) JUST DO IT!!!"
        },
        {
            id: 2,
            username: "Jack Black",
            time: "14:40 11.04.2021",
            text: "lorem"
        },
        {
            id: 3,
            username: "Jack Black",
            time: "14:40 11.04.2021",
            text: "Lorem ipsum dolor sit amet"
        },

    ],
    profile: {},
    status: ''
}

const userPageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST_TO_USER_PAGE: {
            let newMessage = {
                id: 6,
                username: "KOHb",
                time: "14:40 11.04.2021",
                text: action.text
            }
            return {
                ...state,
                postsData: [...state.postsData, newMessage],
            };
        }
        case SET_USER_PAGE_INFORMATION: {

            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}
export default userPageReducer;

//AC
export const SetUserPage = (profile) => {
    return {type: SET_USER_PAGE_INFORMATION, profile: profile}
}
export const AddPost = (text) => {
    return {type: ADD_POST_TO_USER_PAGE, text}
}
export const SetStatus = (status) => {
    return {type: SET_USER_STATUS, status: status}
}

//Thunks
export const getUserPage = (userId) => async dispatch => {
        let response = await userPageAPI(userId);
            dispatch(SetUserPage(response.data));

}

export const getStatus = (id) => async dispatch => {
    let response = await getStatusAPI(id);
    dispatch(SetStatus(response.data))
}

export const updateStatus = (status) => async dispatch => {
       let response = await setStatusAPI(status)
            if (response.data.resultCode === 0) {
                dispatch(SetStatus(status));
            }
}