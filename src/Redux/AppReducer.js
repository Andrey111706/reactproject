import {getAuth} from "./AuthReducer";

let initState = {
    initialized: false
}
const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SetInitialized':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }

}


export const SetInitialized = () => {
    return {type: 'SetInitialized'}
};
export const initializeApp = () => (dispatch) => {
    dispatch(getAuth()).then(() => {
        dispatch(SetInitialized())
    })}
export default AppReducer;


