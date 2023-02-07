import React from 'react';
import {addNewMessageAC, DialogsDataType, updateNewMessagesTextAC} from "../../redux/dialogs-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersRootType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import s from "./Dialogs.module.css";

export type DialogsPropsType = {}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    let dispatch = useDispatch()
    const dialogData = useSelector<ReducersRootType, DialogsDataType>(state => state.dialogsReducer)


    const addNewMessage = () => {
        dispatch(addNewMessageAC())
    }

    const onChangeTextArea = (text: string) => {
        dispatch(updateNewMessagesTextAC(text))
    }

    return (
        <div className={s.dialogs}>
            <Dialogs dialogs={dialogData.dialogs}
                     newMessagesText={dialogData.newMessagesText}
                     messages={dialogData.messages}
                     addNewMessage={addNewMessage}
                     onChangeTextArea={onChangeTextArea}
            />
        </div>
    );
};

