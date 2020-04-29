import React, { useState } from 'react';
import TextEdit from './TextEdit';

export default function Col(props) {

    const [col, setCol] = useState(props.col);

    let style = {
        height: props.col.style.height.value + '' + props.col.style.height.type
    }

    let content = '';
    if (col.content) {
        content = col.content;
    }

    const updateContent = (content) => {
        props.updates.changeColContent(props.containerIndex, props.rowIndex, props.index, content);
    }

    return (
        <div className="col"
            onClick={() =>
                props.setActive(props.containerIndex, props.rowIndex, props.index)
            }>
            <TextEdit content={content} updateContent={updateContent} />
        </div>
    );
}