import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {PostDataType} from "../../../redux/state";

export type PostType = {
    id: string
    title: string
}
export type MyPostsPropsType = {
    postsData: {
        post: PostDataType[]
    }
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.postsData.post.map(e => <Post postsTitle={e.postsTitle}
                                                           postMessage={e.postMessage}
                                                           likesCount={e.likesCount}/>)

    return (
        <div>
            <div className={s.myPostsBlock}>
                <div className={s.myPosts}>
                    <span>My posts</span>
                </div>
                <div className={s.myPostsTextArea}>
                    <textarea placeholder='text'></textarea>
                </div>
                <div className={s.myPostButtonSend}>
                    <button>Send</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
};

