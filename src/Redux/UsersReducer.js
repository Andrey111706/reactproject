import {followAPI, getUsers, unFollowAPI} from "../API/api";

let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isLoading: true,
    fetchUser: [],
}
const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Follow':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, followed: true
                        };
                    }
                    return u;
                })
            }
        case 'UnFollow':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u, followed: false
                        };
                    }
                    return u;
                })
            }
        case 'SetCurrentPage':
            return {...state, currentPage: action.currentPage}
        case 'SetUsers':
            return {...state, users: action.users}
        case 'SetTotalUsersCount':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SetIsLoading':
            return {...state, isLoading: action.isLoading}
        case 'fetchUser':
            return {
                ...state,
                fetchUser: action.fetchUser
                    ? [...state.fetchUser, action.id]
                    : state.fetchUser.filter(id => id !== action.id)
            }
        default:
            return state;
    }

}
export default UsersReducer;

export const acceptFollow = (id) => {
    return {type: 'Follow', id: id}
};
export const acceptUnFollow = (id) => {
    return {type: 'UnFollow', id: id}
};
export const SetUsers = (users) => {
    return {type: 'SetUsers', users: users}
}
export const SetCurrentPage = (currentPage) => {
    return {type: 'SetCurrentPage', currentPage: currentPage}
}
export const SetTotalUsersCount = (usersCount) => {
    return {type: 'SetTotalUsersCount', totalUsersCount: usersCount}
}
export const SetIsLoading = (IsLoading) => {
    return {type: 'SetIsLoading', isLoading: IsLoading}
}
export const fetchUser = (fetchUser, id) => {
    return {type: 'fetchUser', fetchUser, id}
}
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(SetIsLoading(true));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(SetIsLoading(false))
            dispatch(SetUsers(response.data.items))
            dispatch(SetTotalUsersCount(response.data.totalCount))
            dispatch(SetCurrentPage(currentPage))
        })
    }
}
export const unFollow = (u) => {

    return (dispatch) => {
        dispatch(fetchUser(true, u))
        unFollowAPI(u)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(acceptUnFollow(u))
                    dispatch(fetchUser(false, u))
                }
            })

    }

}
export const Follow = (u) => {
    return (dispatch) => {
        dispatch(fetchUser(true, u))
        followAPI(u)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(acceptFollow(u))
                    dispatch(fetchUser(false, u))
                }
            })

    }

}



