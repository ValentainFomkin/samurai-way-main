import React from 'react';
import {addNewMessageAC, DialogsType, MessagesType, updateNewMessagesTextAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {ReducersRootType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type DialogsPropsType = {}

// export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
//     let dispatch = useDispatch()
//     const dialogData = useSelector<ReducersRootType, DialogsDataType>(state => state.dialogsReducer)
//
//
//     const addNewMessage = () => {
//         dispatch(addNewMessageAC())
//     }
//
//     const onChangeTextArea = (text: string) => {
//         dispatch(updateNewMessagesTextAC(text))
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <Dialogs dialogs={dialogData.dialogs}
//                      newMessagesText={dialogData.newMessagesText}
//                      messages={dialogData.messages}
//                      addNewMessage={addNewMessage}
//                      onChangeTextArea={onChangeTextArea}
//             />
//         </div>
//     );
// };

type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessagesText: string
}
type MapDispatchPropsType = {
    onChangeTextArea: (text: string) => void
    addNewMessage: () => void

}

let mapStateToProps = (state: ReducersRootType): MapStatePropsType => {

    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessagesText: state.dialogsReducer.newMessagesText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        onChangeTextArea: (text: string) => {
            dispatch(updateNewMessagesTextAC(text))

        },
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
