import React from 'react';
import s from './Dialog.module.css'
import {Link} from "react-router-dom";

export type DialogItemPropsType = {
    id: string
    name: string

}

export const Dialog = (props: DialogItemPropsType) => {

    const srcAvatar = "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"

    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog}>
            <div><Link to={path}><img src={srcAvatar} alt=""/></Link></div>
            <div><Link to={path}>{props.name}</Link></div>
        </div>
    )
}



