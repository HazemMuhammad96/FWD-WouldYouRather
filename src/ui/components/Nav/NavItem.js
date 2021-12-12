import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItemSection from './NavItemSection'

export default function NavItem({ icon, title, path }) {
    return (
        <li className="navitem">
            <NavLink
                className={(state) =>
                    state.isActive ? "active" : "inactive"
                }
                to={path}
            >
                <NavItemSection
                    classes="navitem-content"
                    icon={icon}
                    title={title}
                />
            </NavLink>
        </li>
    )
}
