import React from 'react';
import s from './Dialog.module.css'
import {Link} from "react-router-dom";

export type DialogItemPropsType = {
    id: string
    name: string

}

export const Dialog = (props: DialogItemPropsType) => {


    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}



