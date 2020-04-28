import React, { useState } from 'react';
import TextEditToolBar from './TextEditToolBar';

export default function TextEdit(props) {

    const testStyle = {
        textAlign: 'center'
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
            <div className="col" style={{ border: '1px red dashed' }} >
                <input value={text} style={style}
                    onChange={(e) => textChange(e.target.value)}
                    onBlur={() => setEditing(false)}
                    autoFocus
                ></input>
            </div>
        );
    } else {
        return (
            <div className="col" onClick={() => toggleEditing()} style={style}>
                {text}
            </div>
        );
    }


}