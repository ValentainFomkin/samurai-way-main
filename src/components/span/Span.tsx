import React from 'react';

export type SpanPropsType = {
    name: string
}

export const Span: React.FC<SpanPropsType> = (props) => {
    return (
        <span>{props.name}</span>
    );
};

