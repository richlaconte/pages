import React, { useState } from 'react';
import Container from './Container';
import { unstable_batchedUpdates } from 'react-dom';

export default function Preview(props) {

    //const [page, setPage] = useState([]);

    let content;
    if (props.page.containers) {
        content = props.page.containers.map((container, index) =>
            <Container
                key={index}
                index={index}
                container={container}
                updates={props.updates}
            />)
    }

    return (
        <div className="container-flex">
            {
                content
            }
            <button onClick={() => props.updates.appendContainer()}>Append container</button>
        </div>
    );
}