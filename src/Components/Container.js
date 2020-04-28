import React, { useState } from 'react';
import Row from './Row';

export default function Container(props) {

    //const [page, setPage] = useState([]);

    let content;
    if (props.container.rows) {
        content = props.container.rows.map((row, index) =>
            <Row
                key={index}
                index={index}
                containerIndex={props.index}
                row={row}
                updates={props.updates}
            />)
    }

    return (
        <div className="container" style={{ border: '5px solid red' }}>
            {
                content
            }
            <button onClick={() => props.updates.appendRow(props.index)}>Add Row</button>
        </div>
    );
}