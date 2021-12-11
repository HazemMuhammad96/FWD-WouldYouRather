import React from 'react'

export default function NavUser({user,}) {
    return (
        <li>
            <div className='navitem'>
                <div className='navitem-section navitem-user'>
                    <img className='icon' src={user.avatarURL} />
                    <span className='title'>{user.name}</span>
                </div>
            </div>
        </li>
    )
}
