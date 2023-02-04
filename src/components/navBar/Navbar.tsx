import React from 'react';
import s from './NavBar.module.css'

export const Navbar = () => {
    return (
        <div>
            <div className={s.item}>
                <a href={''}>Profile</a>
            </div>
            <div className={s.item}>
                <a href={''}>Messages</a>
            </div>
            <div className={s.item}>
                <a href={''}>Music</a>
            </div>
            <div className={s.item}>
                <a href={''}>News</a>
            </div>
            <div className={s.item}>
                <a href={''}>Settings</a>
            </div>
        </div>

    );
};
