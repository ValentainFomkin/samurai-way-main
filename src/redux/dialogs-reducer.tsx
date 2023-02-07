import {v1} from "uuid";


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_ADD_MESSAGE = 'UPDATE-ADD-MESSAGE'

export type DialogsReducerActionType =
    AddNewMessageACType
    | updateNewMessagesTextACType

type AddNewMessageACType = ReturnType<typeof addNewMessageAC>
type updateNewMessagesTextACType = ReturnType<typeof updateNewMessagesTextAC>

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

let initialState: DialogsDataType = {
    dialogs: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Valya'},
        {id: v1(), name: 'Alina'},
        {id: v1(), name: 'Sasha'},

    ],
    messages: [
        {id: v1(), message: 'Hello'},

    ],
    newMessagesText: ''
}

export const DialogsReducer = (state = initialState, action: DialogsReducerActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessagesType = {
                id: v1(),
                message: state.newMessagesText
            }
            return {
                ...state,
                messages: [newMessage, ...state.messages],
                newMessagesText: ''
            }
        }
        case UPDATE_ADD_MESSAGE: {
            return {
                ...state,
                newMessagesText: action.newText
            }
        }
        default:
            return state
    }
}


export const updateNewMessagesTextAC = (text: string) => {
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