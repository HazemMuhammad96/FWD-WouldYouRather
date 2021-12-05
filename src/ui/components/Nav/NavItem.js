import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ icon, title, path }) {
    return (
        <li>
            <NavLink
                className={(state) =>
                    state.isActive ? "active" : "inactive"
                }
                to={path}
            >
                <div className="navitem-content">
                    <div className="icon">{icon}</div>
                    <p className="title">
                        {title}
                    </p>

                </div>
            </NavLink>
        </li>
    )
}
