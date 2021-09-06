import {getAuth} from "./AuthReducer";


// Const CASES
 const SetInitialization = 'SetInitializationInAppAuth'

let initState = {
    initialized: false,
}
const AppReducer = (state = initState, action) => {
    switch (action.type) {
        case SetInitialization:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}
export default AppReducer;

// Action creators
export const SetInitialized = () => {
    return {type: SetInitialization}
};
// Thunks
export const initializeApp = () => async(dispatch) => {
     await dispatch(getAuth());
     dispatch(SetInitialized());
}



