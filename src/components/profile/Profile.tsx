import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <div className={s.photo}>
                <img
                    src="https://www.shutterstock.com/image-photo/collage-portraits-one-young-beautiful-260nw-2025791279.jpg"
                />
            </div>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>


    );
};

