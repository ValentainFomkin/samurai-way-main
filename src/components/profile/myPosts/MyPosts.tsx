import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./post/Post";
import {AllActionType, PostType} from "../../../redux/state";


export type MyPostsPropsType = {
    post: PostType[]
    newPostText: string
    dispatch: (action: AllActionType) => void


}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postElements = props.post.map((e, index) => <Post key={e.id} postMessage={e.postMessage}
                                                          likesCount={e.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        let action: AllActionType = {type: 'ADD-POST'}
        props.dispatch(action)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action: AllActionType = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action)
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

