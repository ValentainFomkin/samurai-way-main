import React from 'react';

export type MusicItemsPropsType = {
    id: string
    title: string

}

export const MusicItems: React.FC<MusicItemsPropsType> = (props) => {


    return (
        <span>{props.title}</span>
    )
}



