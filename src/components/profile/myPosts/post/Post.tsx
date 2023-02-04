import React from 'react';
import s from "./Post.module.css";
import {Span} from "../../../button/Span";

export type PostPropsType = {
    postsTitle: string
    postMessage: string
    likesCount: number
}


export const Post = (props: PostPropsType) => {
    const srcAvatar = "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"

    return (
        <div>
            <div className={s.newPost}>
                <Span name={props.postsTitle}/>
            </div>

            <div className={s.posts}>
                <div className={s.post}>
                    <div className={s.postAvatar}>
                        <img
                            src={srcAvatar}
                            alt=""/>
                    </div>

                    <div className={s.postItem}>
                        <div className={s.postItemText}>
                            <Span name={props.postMessage}/>
                        </div>
                        <div className={s.postItemLike}>
                            <div>
                                <button>Like</button>
                            </div>
                            <div>
                                <span>{props.likesCount} likes</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

