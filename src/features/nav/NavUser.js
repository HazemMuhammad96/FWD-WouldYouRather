import React from 'react'
import NavItemSection from './NavItemSection'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

export default function NavUser({ user, ...buttonProps }) {
    
    return (
        <li>
            <hr />
            <div className='navitem'>
                <NavItemSection
                    classes='navitem-user'
                    icon={
                        <img className='icon avatar' src={user.avatarURL} alt={`${user.name}'s profle`} />
                    }
                    title={user.name}
                >
                    <button className='clear circle' {...buttonProps}>
                        <LogoutIcon />
                    </button>
                </NavItemSection>
            </div>
        </li>
    )
}
