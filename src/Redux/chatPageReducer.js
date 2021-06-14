let initState = {
    chatUsersData: [
        {id: 1, name: "Viktoria"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Semen"},
        {id: 4, name: "Lorem ipsum dolor sit amet"}
    ],
    chatMessageData: [
        {id: 1, message: "Шо там Віка", my: true},
        {id: 2, message: "Шо там Ванька", my: true},
        {id: 3, message: "Шо там Гріша", my: true},
        {id: 4, message: "Шо там Олег", my: false},
        {id: 5, message: "Шо там Лорем іпсум долор", my: false},
    ],
    textValue: "Hello"
}
const chatPageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newmessage = {
                id: 6,
                my: true,
                message: state.textValue
            }
            return {
                ...state,
                chatMessageData: [...state.chatMessageData, newmessage],
                textValue: ''
            };
        }
        case 'CHANGE-TEXT': {
            return {
                ...state,
                textValue: action.text
            };
        }
        default:
            return state;
    }

}
export default chatPageReducer;

export const ChangeTextActionCreator = (text) => {
    return {type: 'CHANGE-TEXT', text: text}
};

export const AddMessageActionCreator = {type: 'ADD-MESSAGE'};
