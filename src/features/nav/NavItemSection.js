import React from 'react';

export default function NavItemSection({classes,icon, title, children}) {
    return (
        <div className={`navitem-section ${classes}`}>
            {icon && <div className="icon">{icon}</div>}
            <span className="title">
                {title}
            </span>
            {children}
        </div>
    )
}
