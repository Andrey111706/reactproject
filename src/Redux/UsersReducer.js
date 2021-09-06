import {followAPI, getUsers, unFollowAPI} from "../API/api";
// CONST CASES
const FOLLOW_FRIEND = 'Follow'
const UNFOLLOW_FRIEND = 'unFollow'
const SET_USERS_TO_LIST = 'SetUsers'
const SET_CURRENT_PAGE_IN_USER_LIST = 'SetCurrentPage'
const SET_IS_LOADING = 'SetIsLoading'
const SET_TOTAL_USERS_COUNT = 'SetTotalUsersCountInData'
const FETCH_USER_FROM_USERS_LIST = 'fetchUser'

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    isLoading: true,
    fetchUser: [],
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW_FRIEND:
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
        case UNFOLLOW_FRIEND:
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
        case SET_CURRENT_PAGE_IN_USER_LIST:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TO_LIST:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case FETCH_USER_FROM_USERS_LIST:
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
//AC
export const acceptFollow = (id) => {
    return {type: FOLLOW_FRIEND, id: id}
};
export const acceptUnFollow = (id) => {
    return {type: UNFOLLOW_FRIEND, id: id}
};
export const SetCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE_IN_USER_LIST, currentPage: currentPage}
}
export const SetUsers = (users) => {
    return {type: SET_USERS_TO_LIST, users: users}
}
export const SetTotalUsersCount = (usersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount}
}
export const SetIsLoading = (IsLoading) => {
    return {type: SET_IS_LOADING, isLoading: IsLoading}
}
export const fetchUser = (fetchUser, id) => {
    return {type: FETCH_USER_FROM_USERS_LIST, fetchUser, id}
}
//THUNKS
export const getUsersThunkCreator = (currentPage, pageSize) => async dispatch => {
        dispatch(SetIsLoading(true));
        let response = await getUsers(currentPage, pageSize)
            dispatch(SetTotalUsersCount(response.data.totalCount))
            dispatch(SetIsLoading(false))
            dispatch(SetCurrentPage(currentPage))
            dispatch(SetUsers(response.data.items))




}

export const unFollow = (u) => async dispatch => {
        dispatch(fetchUser(true, u))
       let response = await unFollowAPI(u)

                if (response.data.resultCode === 0) {
                    dispatch(acceptUnFollow(u))
                    dispatch(fetchUser(false, u))
                }
}

export const Follow = (u) => async dispatch => {
    dispatch(fetchUser(true, u))
    let response = await followAPI(u)
                if (response.data.resultCode === 0) {
                    dispatch(acceptFollow(u))
                    dispatch(fetchUser(false, u))
                }
}



