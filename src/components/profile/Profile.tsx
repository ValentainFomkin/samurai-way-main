import React from 'react';
import s from "./Profile.module.css";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

export type ProfilePropsType = {
    // postsData: PostDataType
    // dispatch: (action: AllActionType) => void


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
                <MyPostsContainer/>
            </div>
        </div>


    );
};

