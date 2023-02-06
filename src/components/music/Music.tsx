import React from 'react';

export type MusicItemsPropsType = {
    id: string
    title: string

}

export const MusicItems: React.FC<MusicItemsPropsType> = (props) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



