import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={s.photo}>
                <img
                    src="https://www.shutterstock.com/image-photo/collage-portraits-one-young-beautiful-260nw-2025791279.jpg"
                />
            </div>
            <div className={s.infoOfProfile}>
                <div className={s.avatar}>
                    <img
                        src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                        alt="avatar"/>
                </div>
                <div className={s.infoOfMe}>
                    <div className={s.name}>
                        <span>Amaliya</span>
                    </div>
                    <div className={s.description}>
                        <p>Date of Birth: </p>
                        <p>City: Volgograd</p>
                        <p>Hobby: Ballet</p>
                        <p>Web Site: <a href="#">lalalalalalal</a></p>
                    </div>
                </div>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>


    );
};

