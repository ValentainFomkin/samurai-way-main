import React from 'react';
import {connect} from "react-redux";
import {ReducersRootType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./user/Users";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '22e0b0ed-963e-4cfa-ab70-768eda585bb6'
    }
})

export class UserContainer extends React.Component<UserAPIComponentPropsType> {
    componentDidMount() {
        instance.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCountAC(res.data.totalCount * 0.002)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        instance.get(`/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
                      onPageChanged={this.onPageChanged}
        />
    }
}


const mapStateToProps = (state: ReducersRootType): MapStatePropsType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUserCount: state.usersReducer.totalUserCount,
        currentPage: state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCountAC: (currentTotalCount: number) => {
            dispatch(setTotalUsersCountAC(currentTotalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer)


export type UserAPIComponentPropsType = {
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
type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number

}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCountAC: (currentTotalCount: number) => void
}