import React from 'react';
import s from "./InfoOfMe.module.css";

export type InfoOfMePropsType = {
    name: string
    dateBirth: string
    country: string
    hobby: string
    siteName: string
}

export const InfoOfMe = (props: InfoOfMePropsType) => {
    return (
        <div>
            <div className={s.infoOfMe}>
                <div className={s.name}>
                    <span>{props.name}</span>
                </div>
                <div className={s.description}>
                    <p>Date of Birth: {props.dateBirth}</p>
                    <p>City: {props.country}</p>
                    <p>Hobby: {props.hobby}</p>
                    <p>Web Site: <a href="#">{props.siteName}</a></p>
                </div>
            </div>
        </div>
    );
};

