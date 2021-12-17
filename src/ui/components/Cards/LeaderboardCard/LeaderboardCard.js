import React from 'react';
import FilledCard from '../FilledCard';
import "./LeaderboardCard.css";
import { ReactComponent as ScoreIcon } from '../../../assets/score.svg';
import LargeAvatarHeader from '../LargeAvatarHeader';


export default function LeaderboardCard({ user, rank, ...props }) {
    return (
        <FilledCard {...props}>
            <LargeAvatarHeader
                name={user.name}
                avatarURL={user.avatarURL}
                onAvatar={rank}
                detailsSection={
                    <>
                        <span>
                            {`${user.created} Questions Asked.`}
                        </span>
                        <span>
                            {`${user.answered} Questions Answered.`}
                        </span>
                    </>
                }>
                <ScoreIcon />
                <span>{user.score}</span>
            </LargeAvatarHeader>
        </FilledCard>
    )
}
