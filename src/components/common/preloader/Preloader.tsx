import React from 'react';
import s from "../../users/UsersContainer.module.css";
import preLoader from "../../../assets/loaders/Rhombus.gif";

export type PreloaderPropsType = {}

export const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div>
            <img className={s.preloader} src={preLoader}/>
        </div>
    );
};

