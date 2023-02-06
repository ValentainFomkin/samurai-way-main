import React from 'react';
import s from './Message.module.css'

export type MessagesItemPropsType = {
    id: string
    text: string
}


export const Message: React.FC<MessagesItemPropsType> = (props) => {
    return (
        <div className={s.message}>
            <div id={props.id}>{props.text}</div>
        </div>
    )
}



