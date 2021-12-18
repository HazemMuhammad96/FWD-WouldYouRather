import React from 'react'

export default function ImagedSelect(props) {
    
    return (
        <div>
            <select className='imagedSelect' {...props}>
                {props.children}
            </select>
        </div>
    )
}
