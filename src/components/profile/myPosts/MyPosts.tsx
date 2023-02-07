import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {PostType} from "../../../redux/profile-reducer";
import {Post} from "./post/Post";


export type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    post: PostType[]
    newPostText: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.post.map((e, index) => <Post key={e.id} postMessage={e.postMessage}
                                                          likesCount={e.likesCount}/>)


    const addPostHandler = () => {
        props.addPost()
        // dispatch(addPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        // dispatch(updateNewPostTextAC(text))
    }

    return (
        <div>
            <div className={s.myPostsBlock}>
                <div className={s.myPosts}>
                    <span>My posts</span>
                </div>
                <div className={s.myPostsTextArea}>
                    <textarea
                        value={props.newPostText}
                        onChange={onChange}
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

