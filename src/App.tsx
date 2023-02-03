import React from 'react';
import './App.module.css';
import s from './App.module.css'

function App() {
    return (
        <div className={s.appWrapper}>
            <div className={s.header}>
                <div className={s.logoHeader}>
                    <img
                        src="https://cdn.dribbble.com/users/153055/screenshots/14524552/media/1c289b4d79870a1bbd71ac00b429e671.jpg?compress=1&resize=400x300&vertical=top"
                        alt="balerina-logo"/>
                </div>
            </div>
            <div className={s.body}>
                <div className={s.navBar}>
                    <div>Profile</div>
                    <div>Messages</div>
                    <div>sadasd</div>
                    <div>asdsad</div>
                </div>
                <div className={s.content}>
                    <img
                        src="https://www.shutterstock.com/image-photo/collage-portraits-one-young-beautiful-260nw-2025791279.jpg"
                    />
                </div>
            </div>
            <div className={s.footer}>
                <div>Main Content</div>
            </div>
        </div>
    );
}

export default App;
