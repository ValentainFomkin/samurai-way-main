import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Footer} from "./components/footer/Footer";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Profile} from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {AllActionType, StateType} from "./redux/store";

export type AppPropsType = {
    state: StateType
    dispatch: (action: AllActionType) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className={s.appWrapper}>
            <div className={s.header}>
                <Header/>
            </div>

            <div className={s.body}>
                <div className={s.navBar}>
                    <Navbar
                        // navigationData={props.state.navigationData}
                    />
                </div>


                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.dialogsData}
                                                               dispatch={props.dispatch}

                    />}/>
                    <Route path={'/profile'} element={<Profile postsData={props.state.postsData}
                                                               dispatch={props.dispatch}

                    />}/>
                </Routes>


            </div>
            <div>
                <Footer/>
            </div>

        </div>


    );
}


