import React from 'react';
import s from './NavBar.module.css'
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className={s.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={s.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to={'/music'}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to={'/news'}>News</Link>
            </div>
            <div className={s.item}>
                <Link to={'/settings'}>Settings</Link>
            </div>
        </div>

    );
};

