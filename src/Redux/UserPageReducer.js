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
    postInputValue: "123",
    profile: {}
}

const userPageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newMessage = {
                id: 6,
                username: "KOHb",
                time: "14:40 11.04.2021",
                text: state.postInputValue
            }
            return {
                ...state,
                PostsData: [...state.PostsData, newMessage],
                postInputValue: ''
            };
        }
        case 'CHANGE-POST-TEXT': {
            return {
                ...state,
                postInputValue: action.text
            };
        }
        case 'SetUserPage': {

            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}
export default userPageReducer;

export const ChangePostText = (text) => {
    return {type: 'CHANGE-POST-TEXT', text: text}
};
export const SetUserPage = (profile) => {

    return {type: 'SetUserPage', profile: profile}
}

export const AddPost = () => {
    return {type: 'ADD-POST'}
}