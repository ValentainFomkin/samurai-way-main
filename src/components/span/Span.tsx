import React from 'react';

export type SpanPropsType = {
    name: string
}

export const Span = (props: SpanPropsType) => {
    return (
        <span>{props.name}</span>
    );
};

