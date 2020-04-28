import React, { useState } from 'react';
import Col from './Col';

export default function Row(props) {

    //const [page, setPage] = useState([]);

    return (
        <div className="row" style={{ border: '5px solid green' }}>
            {
                props.row.cols.map((col, index) =>
                    <Col
                        key={index}
                        index={index}
                        containerIndex={props.containerIndex}
                        rowIndex={props.index}
                        col={col}
                        updates={props.updates}
                    />)
            }
            <button onClick={() => props.updates.appendCol(props.containerIndex, props.index)}>Add Col</button>
        </div>
    );
}