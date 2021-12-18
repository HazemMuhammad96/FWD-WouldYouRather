import React from 'react'

export default function LoginSelect(props) {
    
    return (
        <div>
            <select className='loginSelect' {...props}>
                {props.children}
            </select>
        </div>
    )
}
