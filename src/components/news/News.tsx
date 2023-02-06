import React from 'react';

export type NewsItemsPropsType = {
    id: string
    title: string

}

export const NewsItems: React.FC<NewsItemsPropsType> = (props) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



