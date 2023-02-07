import {v1} from "uuid";
import {AllActionType, DialogsDataType, MessagesType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_ADD_MESSAGE = 'UPDATE-ADD-MESSAGE'

export type ActionTypeDialogsReducer =
    AddNewMessageACType
    | updateNewMessagesTextACType

type AddNewMessageACType = ReturnType<typeof addNewMessageAC>
type updateNewMessagesTextACType = ReturnType<typeof updateNewMessagesTextAC>


export const DialogsReducer = (state: DialogsDataType, action: AllActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessagesType = {
                id: v1(),
                message: state.newMessagesText
            }
            state.messages.unshift(newMessage)
            state.newMessagesText = ''
            return state
        }
        case UPDATE_ADD_MESSAGE: {
            state.newMessagesText = action.newText
            return state
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