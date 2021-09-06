import {connect} from "react-redux";
import UserInform from "./userInform";
import {getUserStatus} from "../../../Redux/Selectors";
import {getStatus, updateStatus} from "../../../Redux/UserPageReducer";


const UserInformContainer = (props) => {
    return (
        <div>
            <UserInform UserName={props.profile.fullName} sex="Horse" city="London"
                        familystage="Inseminate" work="farm" family="horse-brother"
                        status={props.status} getStatus={props.getStatus}
                        updateStatus={props.updateStatus}
            />
        </div>

    )
}
let mapStateToProps = (state) => {
    return {
        status: getUserStatus(state),
        profile: state.UserPage.profile
    }
}
export default connect(mapStateToProps, {updateStatus, getStatus})(UserInformContainer);