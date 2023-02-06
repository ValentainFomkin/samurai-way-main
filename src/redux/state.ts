import {v1} from "uuid";
import {renderEntireTree} from "../index";

export type StoreRootType = {
    _state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    getState: () => StateType

}

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
    addPost() {
        let newPost: PostType = {
            id: v1(),
            postMessage: this._state.postsData.newPostText,
            likesCount: 0
        }
        this._state.postsData.post.unshift(newPost)
        this._state.postsData.newPostText = ''
        renderEntireTree(store)
    },
    updateNewPostText(newText) {
        this._state.postsData.newPostText = newText
        renderEntireTree(store)

    }

}
// @ts-ignore
window.store = store