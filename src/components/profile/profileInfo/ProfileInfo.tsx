import React from 'react';
import s from "./ProfileInfo.module.css";
import {InfoOfMe} from "./infoOfMe/InfoOfMe";


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.infoOfProfile}>
                <div className={s.avatar}>
                    <img
                        src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                        alt="avatar"/>
                </div>
                <InfoOfMe name={'Amalia'}
                          dateBirth={'24.07.2024'}
                          country={'Volgograd'}
                          hobby={'Dance'}
                          siteName={'BlaBla'}/>
            </div>
        </div>


    );
};

