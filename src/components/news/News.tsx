import React from 'react';

export type NewsItemsPropsType = {
    id: string
    title: string

}

export const NewsItems = (props: NewsItemsPropsType) => {


    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
}



