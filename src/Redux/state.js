import rerender from "../render";

let state = {
    mainPage: {
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
                text: "Lorem ipsum dolor sit amet, HEEEELLLLOOOO!!!!"
            },
        ],
    },
    chatPage: {
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

        ]
    }
}

let AddMessage = (messageText) => {
    let newmessage = {
        id: 6,
        my: true,
        message: messageText
    }
    state.chatPage.chatMessageData.push(newmessage);
    rerender(state);

}

export {AddMessage}
export default state;