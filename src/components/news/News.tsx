import React from 'react';

export type NewsItemsPropsType = {
    id: string
    title: string

}

export const NewsItems: React.FC<NewsItemsPropsType> = (props) => {


    return (
        <span>{props.title}</span>
    )
}



