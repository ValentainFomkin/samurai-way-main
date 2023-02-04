import React from 'react';

export type MusicItemsPropsType = {
    id: string
    title: string

}

export const MusicItems = (props: MusicItemsPropsType) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



