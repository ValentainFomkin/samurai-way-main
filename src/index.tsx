import React from 'react';
import './index.css';
import {addPost, state, StateType, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export let renderEntireTree = (props: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={props}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter>, document.getElementById('root')
    )

}


renderEntireTree(state)

