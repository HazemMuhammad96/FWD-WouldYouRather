import React from 'react'
import "./Card.css"

export default function FilledCard(props) {
    return (
        <div className="filledCard" {...props}>
            {props.children}
        </div>
    )
}
