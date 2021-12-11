
import React from 'react'
import "./Logo.css"

function CardPollOption({ side, children, ...props }) {
    return (
        <div className={`logoPoll logoPoll-${side}`}>
            <span className="text">{children}</span>
        </div>
    )
}

export default function Logo() {
    return (
        <div className="logoContainer">
            <div className="logoGrid">
                <CardPollOption side="left"></CardPollOption>
                <div>OR</div>
                <CardPollOption side="right"></CardPollOption>
            </div>
        </div>
    )
}
