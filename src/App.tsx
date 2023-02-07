import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Footer} from "./components/footer/Footer";
import {Profile} from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

export type AppPropsType = {
    // state: StateType
    // dispatch: (action: AllActionType) => void
}

export const App: React.FC<AppPropsType> = (props) => {


    return (

        <div className={s.appWrapper}>
            <div className={s.header}>
                <Header/>
            </div>

            <div className={s.body}>
                <div className={s.navBar}>
                    <Navbar/>
                </div>

                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>

                </Routes>

            </div>
            <div>
                <Footer/>
            </div>

        </div>


    );
}


