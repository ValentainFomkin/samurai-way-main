import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

export type ProfilePropsType = {
    postsData: {
        post: PostDataType[]
    }

}

export const Profile = (props: ProfilePropsType) => {
    const srcPhoto = "https://www.shutterstock.com/image-photo/collage-portraits-one-young-beautiful-260nw-2025791279.jpg"
    return (
        <div className={s.profile}>
            <div className={s.photo}>
                <img
                    src={srcPhoto}
                />
            </div>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts postsData={props.postsData}/>
            </div>
        </div>


    );
};

