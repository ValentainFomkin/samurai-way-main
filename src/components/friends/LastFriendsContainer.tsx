import React from 'react';
import {connect} from "react-redux";
import {Friend} from "./friend/Friend";
import {UsersType} from "../../redux/users-reducer";
import {ReducersRootType} from "../../redux/redux-store";

// export type FriendsItemsPropsType = {
//     id: string
//     title: string
//     lastNameFriend: string
// }


type MapStatePropsType = {
    users: UsersType[]

}


const mapStateToProps = (state: ReducersRootType): MapStatePropsType => {
    return {
        users: state.usersReducer.users
    }
}


export const LastFriendsContainer = connect(mapStateToProps)(Friend)



