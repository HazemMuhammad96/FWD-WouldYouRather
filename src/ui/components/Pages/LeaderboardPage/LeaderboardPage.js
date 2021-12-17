import React from 'react'
import { useSelector } from 'react-redux'
import { fetchLeaderboard } from '../../../../data/state/leaderboardSlice';
import { fetchUsers } from '../../../../data/state/usersSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import LeaderboardCard from '../../Cards/LeaderboardCard/LeaderboardCard';
import PageSection from '../../PageSection/PageSection';
import "./LeaderboardPage.css";

export default function LeaderboardPage() {

    const { leaderboard, loading } = useFetchSelector(
        state => state.leaderboard,
        fetchLeaderboard,
    );

    return (
        <PageSection
            header={"Leaderboard"}
            loading={loading}
        >
            <div className='leaderboardList'>
                <ul className='noBulletsList'>
                    {
                        leaderboard.map((it, i) => {

                            return (
                                <li key={it.id} >
                                    <LeaderboardCard
                                        rank={i + 1}
                                        user={it}
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
