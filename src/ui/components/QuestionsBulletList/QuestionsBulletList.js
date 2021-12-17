import React from 'react'

export default function QuestionsBulletList({ content, children, ...props }) {
    return (
        <>
            <div className='bullet'></div>
            <div className='bulletItems'>
                <ul className='noBulletsList'>
                    <li {...props}>
                        {content}
                    </li>
                    {
                        children
                    }
                </ul>
            </div>
        </>
    )
}
