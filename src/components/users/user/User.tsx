import React from 'react';
import s from "./User.module.css";
import axios from "axios";
import {UsersType} from "../../../redux/users-reducer";
import userPhoto from "../../../assets/images/3135715.png";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '22e0b0ed-963e-4cfa-ab70-768eda585bb6'
    }
})
export type UserPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}


export class User extends React.Component<UserPropsType> {
    constructor(props: UserPropsType) {
        super(props);
        instance.get('/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div className={s.userContainer}>


                {
                    this.props.users.map(u => {
                            const followOnClickHandler = () => {
                                if (u.followed) {
                                    this.props.unFollow(u.id)
                                } else {
                                    this.props.follow(u.id)
                                }
                            }
                            return (
                                <div key={u.id} className={s.userBlock}>
                                    <div className={s.imageAndButton}>
                                        <div className={s.image}>
                                            <img src={u.photos.large != null ? u.photos.large : userPhoto}/>
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
    }
}



