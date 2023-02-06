import React from 'react';

export type SettingsItemsPropsType = {
    id: string
    title: string

}

export const SettingsItems: React.FC<SettingsItemsPropsType> = (props) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



