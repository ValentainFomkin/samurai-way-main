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
import {User} from "./user/User";


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User)
