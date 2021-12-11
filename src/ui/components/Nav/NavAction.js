import React from 'react'

export default function NavAction({ title, icon, ...buttonProps }) {
    return (
        <li>
            <div className='navitem'>
                <div className="actionContainer">
                    <span className='actionTitle'>
                        {title}
                    </span>
                    <button className="fab" {...buttonProps}>
                        {icon}
                    </button>
                </div>
            </div>
        </li>
    )
}
