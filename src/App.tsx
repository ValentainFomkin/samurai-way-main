import React from 'react';
import './App.module.css';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Footer} from "./components/footer/Footer";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <div className={s.header}>
                    <Header/>
                </div>

                <div className={s.body}>
                    <div className={s.navBar}>
                        <Navbar/>
                    </div>

                    <div className={s.dialogs}>
                        <Routes>
                            <Route path={'/dialogs'} element={<Dialogs/>}/>
                        </Routes>
                    </div>
                    <div className={s.profile}>
                        <Routes>
                            <Route path={'/profile'} element={<Profile/>}/>
                        </Routes>
                    </div>

                </div>
                <div className={s.footer}>
                    <Footer/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
