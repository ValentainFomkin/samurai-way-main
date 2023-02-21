import React, {memo, useEffect} from 'react';
import {UsersType} from "../../../redux/users-reducer";
import s from './User.module.css'
import axios from "axios";
import userPhoto from '../../../assets/images/3135715.png'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fa7db0d9-edf1-4a95-a40c-c2d8230fb313'
    }
})

export type UserPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const User = memo((props: UserPropsType) => {

    const srcAvatarLast = userPhoto

    useEffect(() => {
        instance.get('/users')
            .then(res => {
                if (props.users.length <= 4) {
                    props.setUsers(res.data.items)
                }
            })
    }, [])


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
                                        <img src={u.photos.large != null ? u.photos.large : srcAvatarLast}/>
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
                                            <span>{u.name}</span>
                                        </div>
                                        <div className={s.text}>
                                            {u.status}
                                        </div>
                                    </div>

                                    <div className={s.countryAndCity}>
                                        <div className={s.city}>
                                            {'u.location.city'}
                                        </div>
                                        <div className={s.country}>
                                            {'u.location.country'}
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
});

