import React from 'react';
import s from './Friends.module.css'
import {Friend} from "./friend/Friend";

export type FriendsItemsPropsType = {
    id: string
    title: string
    lastNameFriend: string
}

export const FriendsItems: React.FC<FriendsItemsPropsType> = (props) => {


    return (
        <>
            <div className={s.friendsBlock}>
                <div className={s.titleFriend}>
                    <span>{props.title}</span>
                </div>
                <Friend lastNameFriend={props.lastNameFriend}/>
            </div>
        </>
    )
}



