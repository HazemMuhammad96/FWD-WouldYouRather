import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ icon, title, path }) {
    return (
        <li className="navitem">
            <NavLink
                className={(state) =>
                    state.isActive ? "active" : "inactive"
                }
                to={path}
            >
                <div className="navitem-section navitem-content">
                    <div className="icon">{icon}</div>
                    <span className="title">
                        {title}
                    </span>

                </div>
            </NavLink>
        </li>
    )
}
