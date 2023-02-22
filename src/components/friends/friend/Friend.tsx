import React from 'react';
import s from './Friend.module.css'
import {Link} from "react-router-dom";
import {UsersType} from "../../../redux/users-reducer";

export type LastFriendItemsPropsType = {
    users: UsersType[]
}

export const Friend: React.FC<LastFriendItemsPropsType> = (props) => {


    return (
        <>
            {
                props.users.map(u => {
                    return (
                        // u.id <= 444 ?
                        <div key={u.id} className={s.lastTalkFriend}>
                            <div className={s.avatarFriend}>
                                <img src={u.photos.large}/>
                            </div>
                            <div className={s.nameFriend}>
                                <Link to={`/friends/${u.id}`}>
                                    {u.name}
                                </Link>
                            </div>
                        </div>
                        // : ''
                    )
                })}
        </>

    )
}



