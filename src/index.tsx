import React from 'react';
import './index.css';
import {store, StoreRootType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export let renderEntireTree = (props: StoreRootType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={props.getState()}
                dispatch={props.dispatch.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root')
    )

}


renderEntireTree(store)

