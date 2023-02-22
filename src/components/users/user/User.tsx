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
    currentPage: number
    pageSize: number
    totalUserCount: number
    users: UsersType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCountAC: (currentTotalCount: number) => void

}


export class User extends React.Component<UserPropsType> {


    componentDidMount() {
        instance.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCountAC(res.data.totalCount * 0.002)
            })
    }

    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        instance.get(`/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div className={s.userContainer}>
                {pages.map(p => {


                    return (
                        <button key={p}
                                onClick={() => this.setCurrentPage(p)}
                                className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</button>
                    )
                })}
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



