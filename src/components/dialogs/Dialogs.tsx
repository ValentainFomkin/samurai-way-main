import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./messages/Messages";
import {v1} from "uuid";
import {DialogsDataType, MessagesType} from "../../redux/state";

export type DialogsPropsType = {
    dialogsData: {
        dialogs: DialogsDataType[]
        messages: MessagesType[]
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsData.dialogs.map(e => <Dialog id={v1()} name={e.name}/>)
    let messageElements = props.dialogsData.messages.map(e => <Message id={e.id} text={e.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                <div className={s.messageLeft}>
                    {messageElements}
                </div>
                <div className={s.messageRight}>
                    {messageElements}
                </div>
            </div>
        </div>

    );
};

