import React from 'react';
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {ReducersRootType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";


export type MapStatePropsType = {
    post: PostType[]
    newPostText: string
}
export type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}


let mapStateToProps = (state: ReducersRootType): MapStatePropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        post: state.profileReducer.post
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)