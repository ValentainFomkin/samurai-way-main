import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {addPostAC, AllActionType, PostType, updateNewPostTextAC} from "../../../redux/state";


export type MyPostsPropsType = {
    post: PostType[]
    newPostText: string
    dispatch: (action: AllActionType) => void


}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.post.map((e, index) => <Post key={e.id} postMessage={e.postMessage}
                                                          likesCount={e.likesCount}/>)

    
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
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

