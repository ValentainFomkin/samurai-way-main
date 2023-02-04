import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./messages/Messages";
import {v1} from "uuid";
import {DialogsDataType, MessagesType} from "../../index";

export type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messageData: MessagesType[]
}

export const Dialogs = (props: DialogsPropsType) => {
    // let dialogsData = [
    //     {id: v1(), name: 'Dima'},
    //     {id: v1(), name: 'Valya'},
    //     {id: v1(), name: 'Alina'},
    //     {id: v1(), name: 'Sasha'},
    //
    // ]
    // let messageData = [
    //     {id: v1(), message: 'Helloasdasdasdasdasdasdsasadsaddsadasdsaasdsadsadas'},
    //     {id: v1(), message: 'Yoasasasasasasasas'},
    //     {id: v1(), message: 'Byasdasdasdsadas'},
    //     {id: v1(), message: 'IT-KAMASUTRAasdsadsadsaasdasdasdsadsadsadasdasdsa'},
    // ]

    let dialogElements = props.dialogsData.map(e => <Dialog id={v1()} name={e.name}/>)
    let messageElements = props.messageData.map(e => <Message id={e.id} text={e.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messagesItems}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
};

