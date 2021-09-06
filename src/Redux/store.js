import chatPageReducer from "./chatPageReducer";
import userPageReducer from "./UserPageReducer";

//TO REMEMBER!
let store =
    {
        _state: {
            mainPage: {
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
            chatPageReducer(this._state.chatPage,action);
            userPageReducer(this._state.mainPage,action);
            this._renderTree();
        }
    }




window.state = store._state;
// export default store;
// export const acceptFollow = (id) => {
//     return {type: FOLLOW_FRIEND, id: id}
// };
// export const acceptUnFollow = (id) => {
//     return {type: UNFOLLOW_FRIEND, id: id}
// };
// export const SetCurrentPage = (currentPage) => {
//     return {type: 'SetCurrentPage', currentPage: currentPage}
// }
// export const SetUsers = (users) => {
//     return {type: SET_USERS_TO_LIST, users: users}
// }
// export const SetTotalUsersCount = (usersCount) => {
//     return {type: SET_CURRENT_PAGE_IN_USER_LIST, totalUsersCount: usersCount}
// }

// export const acceptFollow = (id) => {
//     return {type: FOLLOW_FRIEND, id: id}
// };
// export const acceptUnFollow = (id) => {
//     return {type: UNFOLLOW_FRIEND, id: id}
// };
// export const SetCurrentPage = (currentPage) => {
//     return {type: 'SetCurrentPage', currentPage: currentPage}
// }
// export const SetUsers = (users) => {
//     return {type: SET_USERS_TO_LIST, users: users}
// }
// export const SetTotalUsersCount = (usersCount) => {
//     return {type: SET_CURRENT_PAGE_IN_USER_LIST, totalUsersCount: usersCount}
// }