import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {v1} from "uuid";

export type PostType = {
    id: string
    title: string
}
export const MyPosts = () => {

    let postsData = [
        {id: v1(), postsTitle: 'Dima', postMessage: `i'm learning React!`, likesCount: 10},
        {id: v1(), postsTitle: 'Valya', postMessage: `i'm learning Redux!`, likesCount: 10},
        {id: v1(), postsTitle: 'Alina', postMessage: `i'm learning Html!`, likesCount: 10},
        {id: v1(), postsTitle: 'Sasha', postMessage: `i'm learning JS!`, likesCount: 10},
        {id: v1(), postsTitle: 'Andrey', postMessage: `i'm learning TypeScript!`, likesCount: 10},
    ]

    let post = postsData.map(e => <Post postsTitle={e.postsTitle}
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
                {post}
                {/*<Post*/}
                {/*    postsTitle={'First post'}*/}
                {/*    postMessage={`i'm learning React!`}*/}
                {/*    likesCount={10}*/}
                {/*/>*/}
                {/*<Post*/}
                {/*    postsTitle={'Second post'}*/}
                {/*    postMessage={`i'm learning HTML!`}*/}
                {/*    likesCount={20}*/}
                {/*/>*/}

            </div>
        </div>
    );
};

