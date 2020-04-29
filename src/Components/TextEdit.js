import React, { useState } from 'react';
import TextEditToolBar from './TextEditToolBar';

export default function TextEdit(props) {

    const testStyle = {
        textAlign: 'center',
        border: 'none',
        display: 'inline',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        padding: 'none',
        width: '100%'
    }

    const [text, setText] = useState(props.content);
    const [style, setStyle] = useState(testStyle);
    const [editing, setEditing] = useState(false);



    const toggleEditing = () => {
        let newEditing = { ...editing };
        newEditing = !editing;
        setEditing(newEditing);
        console.log('done');
    }

    const textChange = (e) => {
        props.updateContent(e);
    }

    if (editing) {
        return (
            <div className="col" style={{ border: '1px red dashed' }} onBlur={(e) => setEditing(false)}>
                <input value={props.content} style={style}
                    onChange={(e) => textChange(e.target.value)}
                    autoFocus
                ></input>
            </div>
        );
    } else {
        return (
            <div className="col" onClick={() => toggleEditing()} style={style}>
                {props.content}
            </div>
        );
    }


}