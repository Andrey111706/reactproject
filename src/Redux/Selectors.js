import {createSelector} from "reselect";

//USER PAGE SELECTORS


export const getProfile = (state) => {
    return state.UserPage.profile
}
export const getProfileReselector = createSelector(getProfile, (profile) =>{
    return "20" + profile
})
export const getUserStatus = (state) => {
    return state.UserPage.status
}
export const getMyId = (state) => {
    return state.AuthReducer.myId
}