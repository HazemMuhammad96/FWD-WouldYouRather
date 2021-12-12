import React from 'react'
import NavItemSection from './NavItemSection'

export default function NavAction({ title, icon, ...buttonProps }) {
    return (
        <li>
            <div className='navitem'>
                <NavItemSection classes={'navitem-action'}
                    title={title}
                >
                    <button className="fab" {...buttonProps}>
                        {icon}
                    </button>
                </NavItemSection>
            </div>
        </li>
    )
}
