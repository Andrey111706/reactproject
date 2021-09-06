import React, {useEffect, useState} from "react";
import s from "./UserInform.module.css"

let ProfileStatusWithHooks = (props) => {
    let [editMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    let activateEditMode = () => {
        SetEditMode(true)
    }
    let deactivateEditMode = () => {
        SetEditMode(false);

        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }
    return (
        <div>
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}
                       className={s.status}/>
            </div>
            }


            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'NON'}</span>
            </div>
            }
        </div>)
}


export default ProfileStatusWithHooks;