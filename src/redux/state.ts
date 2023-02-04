import {v1} from "uuid";

export type PostDataType = {
    id: string
    postsTitle: string
    postMessage: string
    likesCount: number
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type NameFriendsType = {
    id: string
    name: string
}

export const state = {
    postsData: {
        post: [
            {id: v1(), postsTitle: 'Dima', postMessage: `i'm learning React!`, likesCount: 10},
            {id: v1(), postsTitle: 'Valya', postMessage: `i'm learning Redux!`, likesCount: 10},
            {id: v1(), postsTitle: 'Alina', postMessage: `i'm learning Html!`, likesCount: 10},
            {id: v1(), postsTitle: 'Sasha', postMessage: `i'm learning JS!`, likesCount: 10},
            {id: v1(), postsTitle: 'Andrey', postMessage: `i'm learning TypeScript!`, likesCount: 10},
        ],
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
    }

}

