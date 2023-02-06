import React, {RefObject} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {v1} from "uuid";
import {DialogsType, MessagesType} from "../../redux/state";

export type DialogsPropsType = {
    dialogsData: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogsData.dialogs.map((e, index) => <Dialog key={e.id} id={v1()} name={e.name}/>)
    let messageElements = props.dialogsData.messages.map((e, index) => <Message key={e.id} id={e.id} text={e.message}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewMessageHandler = () => {
        if (newPostElement.current) {
            alert(newPostElement.current.value)
            newPostElement.current.value = ''
        }


    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.textareaAndButtonDialogs}>
                <div className={s.dialogsTextArea}>
                    <textarea ref={newPostElement} placeholder='text'></textarea>
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

