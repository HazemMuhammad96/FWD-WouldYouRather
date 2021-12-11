import React from 'react'

export default function ImagedSelect(props) {
    // react select with images
    return (
        <div>
            <select {...props}>
                {props.children}
            </select>
        </div>
    )
}
