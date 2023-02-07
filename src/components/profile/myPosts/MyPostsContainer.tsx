import React from 'react';
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {ReducersRootType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";


export type MyPostsPropsType = {}

// export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
//     let dispatch = useDispatch()
//     const postData = useSelector<ReducersRootType, PostDataType>(state => state.profileReducer)
//
//     const addPostHandler = () => {
//         dispatch(addPostAC())
//     }
//
//     const onPostChange = (text: string) => {
//         dispatch(updateNewPostTextAC(text))
//     }
//
//     return (
//         <div>
//             <MyPosts newPostText={postData.newPostText}
//                      post={postData.post}
//                      addPost={addPostHandler}
//                      updateNewPostText={onPostChange}/>
//         </div>
//     );
// };


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