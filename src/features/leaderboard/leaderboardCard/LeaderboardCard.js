import React from 'react';
import  styles from "./LeaderboardCard.module.css";
import { ReactComponent as ScoreIcon } from '../../../ui/assets/score.svg';
import FilledCard from '../../common/cards/FilledCard';
export default function LeaderboardCard({ user, rank, rankClassName, ...props }) {
    return (
        <FilledCard>
            <div className={styles.leaderboardCard}>

                <div className={styles.avatar}>
                    <div>
                        {
                            rank &&
                            <div className={rankClassName}>
                                {rank}
                            </div>
                        }
                        <img src={user.avatarURL} alt={`${user.name}'s profile picture`} />
                    </div>
                </div>

                <div className={styles.name}>
                    {user.name}
                </div>
                <div className={styles.questions}>
                    <>
                        <span>
                            {`Questions Asked: ${user.created}`}
                        </span>
                        <span>
                            {`Questions Answered: ${user.answered}`}
                        </span>
                    </>
                </div>

                <div className={styles.score}>
                    <ScoreIcon />
                    <span>{user.score}</span>
                </div>
            </div>
        </FilledCard>
    )


    
}

