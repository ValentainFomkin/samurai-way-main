import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";


export type MyPostsPropsType = {
    postsData: {
        post: PostType[]
    }
    addPost: (postMessage: string) => void


}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postElements = props.postsData.post.map((e, index) => <Post key={e.id} postMessage={e.postMessage}
                                                                    likesCount={e.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }

    }

    return (
        <div>
            <div className={s.myPostsBlock}>
                <div className={s.myPosts}>
                    <span>My posts</span>
                </div>
                <div className={s.myPostsTextArea}>
                    <textarea
                        ref={newPostElement}
                        placeholder='text'></textarea>
                </div>
                <div className={s.myPostButtonSend}>
                    <button onClick={addPostHandler}>Send</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
};

