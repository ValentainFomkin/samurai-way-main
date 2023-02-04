import React from 'react';

export type SettingsItemsPropsType = {
    id: string
    title: string

}

export const SettingsItems = (props: SettingsItemsPropsType) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



