import {v1} from "uuid";
import {renderEntireTree} from "../index";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_ADD_MESSAGE = 'UPDATE-ADD-MESSAGE'

export type StoreRootType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: AllActionType) => void

}
export type AllActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddNewMessageAC
    | UpdateNewMessagesText

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type AddNewMessageAC = ReturnType<typeof addNewMessageAC>
type UpdateNewMessagesText = ReturnType<typeof updateNewMessagesText>


export type StateType = {
    postsData: PostDataType
    dialogsData: DialogsDataType
    navigationData: NavigationDataType
}

export type PostDataType = {
    post: PostType[]
    newPostText: string
}
export type PostType = {
    id: string
    postMessage: string
    likesCount: number
}

export type DialogsDataType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessagesText: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}

export type NavigationDataType = {
    nameFriend: NameFriendType[]
}
export type NameFriendType = {
    id: string
    name: string
}


export let store: StoreRootType = {
    _state: {
        postsData: {
            post: [
                {id: v1(), postMessage: `i'm learning React!`, likesCount: 10},
                {id: v1(), postMessage: `i'm learning Redux!`, likesCount: 10},
                {id: v1(), postMessage: `i'm learning Html!`, likesCount: 10},
                {id: v1(), postMessage: `i'm learning JS!`, likesCount: 10},
                {id: v1(), postMessage: `i'm learning TypeScript!`, likesCount: 10},
            ],
            newPostText: '',
        },
        dialogsData: {
            dialogs: [
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Valya'},
                {id: v1(), name: 'Alina'},
                {id: v1(), name: 'Sasha'},

            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'By'},
                {id: v1(), message: 'IT-KAMASUTRA'},
            ],
            newMessagesText: '',

        },
        navigationData: {
            nameFriend: [
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Valya'},
                {id: v1(), name: 'Alina'},
            ]
        },
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                postMessage: this._state.postsData.newPostText,
                likesCount: 0
            }
            this._state.postsData.post.unshift(newPost)
            this._state.postsData.newPostText = ''
            renderEntireTree(store)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsData.newPostText = action.newText
            renderEntireTree(store)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: MessagesType = {
                id: v1(),
                message: this._state.dialogsData.newMessagesText
            }
            this._state.dialogsData.messages.unshift(newMessage)
            this._state.dialogsData.newMessagesText = ''
            renderEntireTree(store)

        } else if (action.type === UPDATE_ADD_MESSAGE) {
            this._state.dialogsData.newMessagesText = action.newText
            renderEntireTree(store)

        }
    },

}

export const updateNewMessagesText = (text: string) => {
    return {
        type: UPDATE_ADD_MESSAGE,
        newText: text
    } as const
}

export const addNewMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
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

// @ts-ignore
window.store = store