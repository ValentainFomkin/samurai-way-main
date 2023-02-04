import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./messages/Messages";
import {v1} from "uuid";

// export type DialogsPropsType = {
//     dialog: DialogItemPropsType[]
//     message?: MessagesItemPropsType[]
// }

export const Dialogs = () => {
    let dialogsData = [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Valya'},
        {id: v1(), name: 'Alina'},
        {id: v1(), name: 'Sasha'},

    ]
    let messageData = [
        {id: v1(), message: 'Helloasdasdasdasdasdasdsasadsaddsadasdsaasdsadsadas'},
        {id: v1(), message: 'Yoasasasasasasasas'},
        {id: v1(), message: 'Byasdasdasdsadas'},
        {id: v1(), message: 'IT-KAMASUTRAasdsadsadsaasdasdasdsadsadsadasdasdsa'},
    ]

    let dialog = dialogsData.map(e => <Dialog id={v1()} name={e.name}/>)
    let message = messageData.map(e => <Message id={e.id} text={e.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialog}
                    {/*<Dialog id={v1()} name={'Valya'}/>*/}
                    {/*<Dialog id={v1()} name={'Alina'}/>*/}
                    {/*<Dialog id={v1()} name={'Dima'}/>*/}
                    {/*<Dialog id={v1()} name={'Sasha'}/>*/}
                </div>
                <div className={s.messagesItems}>
                    {message}
                    {/*<Message text={'Hello'}/>*/}
                    {/*<Message text={'Yo'}/>*/}
                    {/*<Message text={'By'}/>*/}
                </div>
            </div>
        </div>
    );
};

