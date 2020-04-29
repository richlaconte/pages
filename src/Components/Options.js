import React from 'react'

function Options(props) {

    let content;

    if (props.active.style) {
        content =
            <div className="col-3" style={{ backgroundColor: 'lightGrey' }}>
                <span>Height: {props.active.style.height.value}
                    {props.active.style.height.type}
                </span>
            </div>
    } else {
        content = <div className="col-3" style={{ backgroundColor: 'lightGrey' }} ></div>
    }

    return (
        content
    )
}

export default Options
