import React, { useState } from 'react';
import TextEdit from './TextEdit';

export default function Col(props) {

    const [col, setCol] = useState(props.col);

    let content = '';
    if (col.content) {
        content = col.content;
    }

    const updateContent = (content) => {
        props.updates.changeColContent(props.containerIndex, props.rowIndex, props.index, content);
    }

    return (
        <div className="col" style={{ border: '1px solid blue' }}>
            <TextEdit content={content} updateContent={updateContent} />
        </div>
    );
}