import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

export type ProfilePropsType = {
    postsData: {
        post: PostType[]
    }
    addPost: (postMessage: string) => void


}

export const Profile: React.FC<ProfilePropsType> = (props) => {
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
                <MyPosts postsData={props.postsData}
                         addPost={props.addPost}
                />
            </div>
        </div>


    );
};

