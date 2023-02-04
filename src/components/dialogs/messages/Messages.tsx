import React from 'react';
import s from './Messages.module.css'

export type MessagesItemPropsType = {
    id: string
    text: string
}


export const Message = (props: MessagesItemPropsType) => {
    return (
        <div className={s.message}>
            <span id={props.id}>{props.text}</span>
        </div>
    )
}



