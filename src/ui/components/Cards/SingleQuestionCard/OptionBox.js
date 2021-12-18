import React from 'react'

export default function OptionBox({extraContent,children}) {
    return (
        <div className='questionBox'>
            <div className='questionBox-content'>
                {children}
            </div>
            {
                extraContent && extraContent
            }
        </div>
    )
}
