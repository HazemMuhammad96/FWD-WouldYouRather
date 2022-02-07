import React from 'react'
import { fetchLeaderboard, selectLeaderboard } from './leaderboardSlice';
import { useFetchSelector } from '../../ui/hooks/reduxHooks';
import LeaderboardCard from './leaderboardCard/LeaderboardCard';
import PageSection from '../common/PageSection/PageSection';
import styles from "./Leaderboard.module.css";

export default function LeaderboardPage() {

    const { leaderboard, loading } = useFetchSelector(
        selectLeaderboard,
        fetchLeaderboard,
    );

    return (
        <PageSection
            header={"Leaderboard"}
            loading={loading}
        >
            <div className={styles.leaderboardList}>
                <ul className='noBulletsList'>
                    {
                        leaderboard.map((it, i) => {

                            return (
                                <li key={it.id} >
                                    <LeaderboardCard
                                        rank={i + 1}
                                        user={it}
                                        rankClassName={styles.cardRank}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </PageSection>
    )
}
