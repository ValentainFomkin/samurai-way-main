import React from 'react';

export type SettingsItemsPropsType = {
    id: string
    title: string

}

export const SettingsItems: React.FC<SettingsItemsPropsType> = (props) => {


    return (
        <span>{props.title}</span>
    )
}



