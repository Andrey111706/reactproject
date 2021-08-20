import {getStatusAPI, setStatusAPI, userPageAPI} from "../API/api";

let initState = {
    PostsData: [
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
        case 'ADD-POST': {
            let newMessage = {
                id: 6,
                username: "KOHb",
                time: "14:40 11.04.2021",
                text: action.text
            }
            return {
                ...state,
                PostsData: [...state.PostsData, newMessage],
            };
        }
        case 'SetUserPage': {

            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SetStatus': {
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
    return {type: 'SetUserPage', profile: profile}
}
export const AddPost = (text) => {
    return {type: 'ADD-POST', text}
}
export const SetStatus = (status) => {
    return {type: 'SetStatus', status: status}
}

//Thunks
export const getUserPage = (userId) => {
    return (dispatch) => {
        userPageAPI(userId).then(response => {
            dispatch(SetUserPage(response.data))
        })
    }
}
export const getStatus = (id) => {
    return (dispatch) => {
        getStatusAPI(id).then(response => {

            dispatch(SetStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        setStatusAPI(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetStatus(status));
            }


        })
    }
}