import {v1} from "uuid";
import {AllActionType, PostDataType, PostType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const ProfileReducer = (state: PostDataType, action: AllActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                postMessage: state.newPostText,
                likesCount: 0
            }
            state.post.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }

}

export type ActionTypeProfileReducer = AddPostActionType
    | UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}