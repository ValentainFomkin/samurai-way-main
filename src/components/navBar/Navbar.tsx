import React from 'react';
import s from './NavBar.module.css'
import {Link} from "react-router-dom";
import {MusicItems} from "../music/Music";
import {v1} from "uuid";
import {NewsItems} from "../news/News";
import {SettingsItems} from "../settings/Settings";
import {FriendsItems} from "../friends/Friends";

// export type NavbarPropsType = {
//     navigationData: {
//         nameFriend: NameFriendType[]
//     }
//
// }

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
                <Link to={'/music'}><MusicItems id={v1()} title={'Music'}/></Link>
            </div>
            <div className={s.item}>
                <Link to={'/news'}><NewsItems id={v1()} title={'News'}/> </Link>
            </div>
            <div className={s.item}>
                <Link to={'/settings'}><SettingsItems id={v1()} title={'Settings'}/></Link>
            </div>
            <div className={s.item}>
                <Link to={'/friends'}><FriendsItems id={v1()} title={'Friends'} lastNameFriend={'321321'}/></Link>
            </div>
        </div>

    );
};

