import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {v1} from "uuid";

export type PostDataType = {
    id: string
    postsTitle: string
    postMessage: string
    likesCount: number
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

let postsData: PostDataType[] = [
    {id: v1(), postsTitle: 'Dima', postMessage: `i'm learning React!`, likesCount: 10},
    {id: v1(), postsTitle: 'Valya', postMessage: `i'm learning Redux!`, likesCount: 10},
    {id: v1(), postsTitle: 'Alina', postMessage: `i'm learning Html!`, likesCount: 10},
    {id: v1(), postsTitle: 'Sasha', postMessage: `i'm learning JS!`, likesCount: 10},
    {id: v1(), postsTitle: 'Andrey', postMessage: `i'm learning TypeScript!`, likesCount: 10},
]

let dialogsData: DialogsDataType[] = [
    {id: v1(), name: 'Dima'},
    {id: v1(), name: 'Valya'},
    {id: v1(), name: 'Alina'},
    {id: v1(), name: 'Sasha'},

]
let messageData: MessagesType[] = [
    {id: v1(), message: 'Helloasdasdasdasdasdasdsasadsaddsadasdsaasdsadsadas'},
    {id: v1(), message: 'Yoasasasasasasasas'},
    {id: v1(), message: 'Byasdasdasdsadas'},
    {id: v1(), message: 'IT-KAMASUTRAasdsadsadsaasdasdasdsadsadsadasdasdsa'},
]

ReactDOM.render(
    <App postsData={postsData}
         dialogsData={dialogsData}
         messageData={messageData}
    />,
    document.getElementById('root')
);