import React from 'react'

export default function CardDetails({ imageUrl, primary, secondary,children,...props }) {
    return (
        <div
            className={`cardInfo ${props.className}`}
            {...props}
        >
            <img
                className="avatar"
                src={imageUrl}
                alt="Avatar" />
            <div>
                <span>
                    {primary}
                </span>
                <span className="timestamp">
                    {secondary}
                </span>
            </div>
            <div className='actions'>
                {children}
            </div>
        </div>
    )
}
