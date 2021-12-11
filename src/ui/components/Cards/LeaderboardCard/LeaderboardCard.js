import React from 'react';
import FilledCard from '../FilledCard';
import "./LeaderboardCard.css";
import { ReactComponent as ScoreIcon } from '../../../assets/score.svg';

export default function LeaderboardCard({ user,rank, ...props }) {
    return (
        <FilledCard {...props}>
            <div className='leaderboardCard'>

                <div className="leaderboardCard-avatar">
                    <div>
                        <div className='leaderboardCard-rank'>
                            {rank}
                        </div>
                        <img src={user.avatarURL} alt={`${user.name}'s profile picture`} />
                    </div>
                </div>

                <div className='leaderboardCard-name'>
                    {user.name}
                </div>
                <div className='leaderboardCard-questions'>
                    <span>
                        {`${user.created} Questions Asked.`}
                    </span>
                    <span>
                        {`${user.answered} Questions Answered.`}
                    </span>
                </div>

                <div className='leaderboardCard-score'>
                    <ScoreIcon />
                    <span>{user.score}</span>
                </div>
            </div>
        </FilledCard>
    )
}
