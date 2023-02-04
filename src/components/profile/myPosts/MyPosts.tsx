import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";

export type PostType = {
    id: string
    title: string
}
export const MyPosts = () => {


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

                <Post
                    postsTitle={'First post'}
                    postMessage={`i'm learning React!`}
                    likesCount={10}
                />
                <Post
                    postsTitle={'Second post'}
                    postMessage={`i'm learning HTML!`}
                    likesCount={20}
                />

            </div>
        </div>
    );
};

