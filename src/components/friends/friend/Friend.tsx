import React from 'react';
import s from './Friend.module.css'

export type LastFriendItemsPropsType = {
    lastNameFriend: string
}

export const Friend: React.FC<LastFriendItemsPropsType> = (props) => {
    const srcAvatar = "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"


    return (
        <>
            <div className={s.lastTalkFriend}>
                <div className={s.avatarFriend}>
                    <img src={srcAvatar}/>
                </div>
                <div className={s.nameFriend}>
                        <span>
                            {props.lastNameFriend}
                        </span>
                </div>
            </div>
        </>
    )
}



