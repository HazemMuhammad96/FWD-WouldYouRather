
import React from "react"


export default function ProgressContainer({ className, ...props }) {

    return (
        <div className={`progressContainer ${className ?? ''}`}>
            <progress max="100" value={props.value ?? 0} />
            <div className='progress-content'>
                {props.children}
            </div>
        </div>
    )
}