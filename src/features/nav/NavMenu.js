import React from 'react'
import { ReactComponent as MenuIcon } from '../../ui/assets/menu.svg'

export default function NavMenu(props) {
    return (
        <li className="navitem">
            <button className="fab clear menu " {...props}>
                <MenuIcon />
            </button>
        </li>
    )
}
