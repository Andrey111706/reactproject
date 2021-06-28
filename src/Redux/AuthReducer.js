let initState = {
    userId: null,
    email: null,
    login: 21,
    isAuth:false,
}
const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SetUsersData':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state;
    }

}
export default AuthReducer;

export const SetUsersData = (userData) => {
    return {type: 'SetUsersData', data:userData}
};





