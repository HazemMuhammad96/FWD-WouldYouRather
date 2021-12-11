import React from 'react'

export default function CardFooter({action, ...props}) {
    return (
        <div className="cardFooter">
            <div className="cardFooterData">

            </div>
            <button onClick={() => action()}>Answer</button>
        </div>
    )
}
