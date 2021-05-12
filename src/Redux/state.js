let store =
    {
        _state: {
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
                        text: "Lorem ipsum dolor sit amet"
                    },

                ],
                postInputValue: "123",
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
                ],
                textValue: "Hello"
            }
        },
        _renderTree() {
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._renderTree = observer;
        },

        dispatch(action) {
            if (action.type === 'ADD-MESSAGE') {
                let newmessage = {
                    id: 6,
                    my: true,
                    message: this._state.chatPage.textValue
                }
                this._state.chatPage.chatMessageData.push(newmessage);
                this._state.chatPage.textValue = '';
                this._renderTree();

            } else if (action.type === 'CHANGE-TEXT') {
                this._state.chatPage.textValue = action.text;
                this._renderTree();

            } else if (action.type === 'ADD-POST') {
                let newmessage = {
                    id: 6,
                    username: "KOHb",
                    time: "14:40 11.04.2021",
                    text: this._state.mainPage.postInputValue
                }
                this._state.mainPage.PostsData.push(newmessage);
                this._state.mainPage.postInputValue = '';
                this._renderTree();

            } else if (action.type === 'CHANGE-POST-TEXT') {
                this._state.mainPage.postInputValue = action.text;
                this._renderTree();
            }
        }
    }

export const ChangeTextActionCreator = (text) => {
    return {type: 'CHANGE-TEXT', text: text}};

export const AddMessageActionCreator = {type: 'ADD-MESSAGE'};

export const ChangePostTextActionCreator = (text) => {
    return {type: 'CHANGE-POST-TEXT', text: text}};

export const AddPostActionCreator = {type: 'ADD-POST'};

window.store = store._state;
export default store;
