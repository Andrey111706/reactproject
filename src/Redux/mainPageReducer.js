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
}

const mainPageReducer = (state = initState, action) => {
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
        default:
            return state;
    }
}
export default mainPageReducer;

export const ChangePostTextActionCreator = (text) => {
    return {type: 'CHANGE-POST-TEXT', text: text}
};

export const AddPostActionCreator = {type: 'ADD-POST'};