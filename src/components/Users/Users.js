import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/avatar.png"


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => props.PageOnchange(p)}>{p}</span>
            })}
        </div>

        {props.users.map(u => {
            return (
                <div>
                    <div>
                        <div className={s.avatar}><img
                            src={u.photos.small != null ? u.photos.small : avatar} alt="=)"/></div>
                        <div>{u.name}</div>
                        {u.followed ? <button onClick={() => props.UnFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.Follow(u.id)}>Follow</button>
                        }

                    </div>

                </div>)

        })}
    </div>
}

export default Users;