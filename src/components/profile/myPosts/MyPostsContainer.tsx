import React from 'react';
import {addPostAC, PostDataType, updateNewPostTextAC,} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersRootType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


export type MyPostsPropsType = {}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let dispatch = useDispatch()
    const postData = useSelector<ReducersRootType, PostDataType>(state => state.profileReducer)

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        dispatch(updateNewPostTextAC(text))
    }

    return (
        <div>
            <MyPosts newPostText={postData.newPostText}
                     post={postData.post}
                     addPost={addPostHandler}
                     updateNewPostText={onPostChange}/>
        </div>
    );
};

