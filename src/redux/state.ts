import {v1} from "uuid";
import {ActionTypeProfileReducer, ProfileReducer} from "./profile-reducer";
import {ActionTypeDialogsReducer, DialogsReducer} from "./dialogs-reducer";
import {SiteBarReducer} from "./siteBar-reducer";
import {renderEntireTree} from "../index";

export type StoreRootType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: AllActionType) => void
}

export type AllActionType =
    ActionTypeProfileReducer
    | ActionTypeDialogsReducer


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
        this._state.postsData = ProfileReducer(this._state.postsData, action)
        this._state.dialogsData = DialogsReducer(this._state.dialogsData, action)
        this._state.navigationData = SiteBarReducer(this._state.navigationData, action)

        renderEntireTree(store)
    },

}

// @ts-ignore
window.store = store