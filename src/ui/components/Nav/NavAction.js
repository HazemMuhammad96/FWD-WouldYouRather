import React from 'react'
import { Link } from 'react-router-dom'
import NavItemSection from './NavItemSection'

export default function NavAction({ title, icon, action, ...buttonProps }) {
    return (
        <li>
            <div className='navitem'>
                <NavItemSection classes={'navitem-action'}
                    title={title}
                >
                    <Link to={action} {...buttonProps}>
                        <button className="fab" >
                            {icon}
                        </button>
                    </Link>
                </NavItemSection>
            </div>
        </li>
    )
}
