import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {v1} from "uuid";
import {AllActionType, DialogsDataType,} from "../../redux/store";
import {addNewMessageAC, updateNewMessagesTextAC} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    dialogsData: DialogsDataType
    dispatch: (action: AllActionType) => void

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogsData.dialogs.map((e, index) => <Dialog key={e.id} id={v1()} name={e.name}/>)
    let messageElements = props.dialogsData.messages.map((e, index) => <Message key={e.id} id={e.id} text={e.message}/>)

    const addNewMessageHandler = () => {
        props.dispatch(addNewMessageAC())
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewMessagesTextAC(text))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.textareaAndButtonDialogs}>
                <div className={s.dialogsTextArea}>
                    <textarea value={props.dialogsData.newMessagesText}
                              onChange={onChangeTextAreaHandler}
                              placeholder='text'/>
                </div>
                <div className={s.dialogsButtonSend}>
                    <button onClick={addNewMessageHandler}>Send</button>
                </div>
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

