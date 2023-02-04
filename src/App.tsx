import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Footer} from "./components/footer/Footer";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsDataType, MessagesType, NameFriendsType, PostDataType} from "./redux/state";

export type AppPropsType = {
    state: {
        postsData: {
            post: PostDataType[]
        }
        dialogsData: {
            dialogs: DialogsDataType[]
            messages: MessagesType[]
        }
        navigationData: {
            nameFriend: NameFriendsType[]
        }
    }
}

export const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <div className={s.header}>
                    <Header/>
                </div>

                <div className={s.body}>
                    <div className={s.navBar}>
                        <Navbar navigationData={props.state.navigationData}/>
                    </div>


                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.dialogsData}/>}/>
                        <Route path={'/profile'} element={<Profile postsData={props.state.postsData}/>}/>
                    </Routes>


                </div>
                <div>
                    <Footer/>
                </div>

            </div>
        </BrowserRouter>

    );
}


