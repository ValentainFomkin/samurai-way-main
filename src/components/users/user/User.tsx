import React from 'react';
import {UsersType} from "../../../redux/users-reducer";
import s from './User.module.css'
import {v1} from "uuid";


export type UserPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const User = (props: UserPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
                followed: false,
                fullName: 'Dima',
                status: 'im a boss',
                location: {city: 'Volgograd', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
                followed: true,
                fullName: 'Valya',
                status: 'im a boss',
                location: {city: 'Ukraine', country: 'Kiev'}
            },
            {
                id: v1(),
                photoUrl: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000',
                followed: false,
                fullName: 'Alina',
                status: 'im a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return (
        <div className={s.userContainer}>
            {
                props.users.map(u => {
                        const followOnClickHandler = () => {
                            if (u.followed) {
                                props.unFollow(u.id)
                            } else {
                                props.follow(u.id)
                            }
                        }
                        return (
                            <div key={u.id} className={s.userBlock}>
                                <div className={s.imageAndButton}>
                                    <div className={s.image}>
                                        <img src={u.photoUrl}/>
                                    </div>
                                    <div className={s.buttonFollow}>
                                        <button onClick={followOnClickHandler}>
                                            {u.followed ? 'Follow' : 'Unfollow'}
                                        </button>
                                    </div>
                                </div>

                                <div className={s.infoProfile}>
                                    <div className={s.nameAndText}>
                                        <div className={s.name}>
                                            <span>{u.fullName}</span>
                                        </div>
                                        <div className={s.text}>
                                            {u.status}
                                        </div>
                                    </div>

                                    <div className={s.countryAndCity}>
                                        <div className={s.city}>
                                            {u.location.city}
                                        </div>
                                        <div className={s.country}>
                                            {u.location.country}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }

        </div>

    );
};

