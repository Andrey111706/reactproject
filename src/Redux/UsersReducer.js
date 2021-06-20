let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 3,
    isLoading: true,
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

        default:
            return state;
    }

}
export default UsersReducer;

export const FollowAC = (id) => {
    return {type: 'Follow', id: id}
};
export const UnFollowAC = (id) => {
    return {type: 'UnFollow', id: id}
};
export const SetUsers = (users) => {
    return {type: 'SetUsers', users: users}
}
export const SetCurrentPageAC = (currentPage) => {
    return {type: 'SetCurrentPage', currentPage: currentPage}
}
export const SetTotalUsersCountAC = (usersCount) => {
    return {type: 'SetTotalUsersCount', totalUsersCount: usersCount}
}
export const SetIsLoadingAC = (IsLoading) => {
    return {type:'SetIsLoading', isLoading:IsLoading}
}



