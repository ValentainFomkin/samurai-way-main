import {v1} from "uuid";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfileReducerActionType = AddPostActionType
    | UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type PostDataType = {
    post: PostType[]
    newPostText: string
}
export type PostType = {
    id: string
    postMessage: string
    likesCount: number
}

let initialState: PostDataType = {
    post: [
        {id: v1(), postMessage: `i'm learning React!`, likesCount: 10},
        {id: v1(), postMessage: `i'm learning Redux!`, likesCount: 10},
        {id: v1(), postMessage: `i'm learning Html!`, likesCount: 10},
        {id: v1(), postMessage: `i'm learning JS!`, likesCount: 10},
        {id: v1(), postMessage: `i'm learning TypeScript!`, likesCount: 10},
    ],
    newPostText: ''
}

export const ProfileReducer = (state = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                postMessage: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                post: [newPost, ...state.post],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }

}


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