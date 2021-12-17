import React from "react";

export default function LargeAvatarHeader({ name, avatarURL, detailsSection, onAvatar, children }) {
    return (
        <div className='leaderboardCard'>

            <div className="leaderboardCard-avatar">
                <div>
                    {
                        onAvatar &&
                        <div className='leaderboardCard-rank'>
                            {onAvatar}
                        </div>
                    }
                    <img src={avatarURL} alt={`${name}'s profile picture`} />
                </div>
            </div>

            <div className='leaderboardCard-name'>
                {name}
            </div>
            <div className='leaderboardCard-questions'>
                {detailsSection}
            </div>

            <div className='leaderboardCard-score'>
                {children}
            </div>
        </div>
    )
}