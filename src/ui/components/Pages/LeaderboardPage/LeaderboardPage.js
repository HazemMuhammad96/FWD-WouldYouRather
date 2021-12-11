import React from 'react'
import { useSelector } from 'react-redux'
import { fetchLeaderboard } from '../../../../data/state/leaderboardSlice';
import { fetchUsers } from '../../../../data/state/usersSlice';
import { useFetchSelector } from '../../../hooks/reduxHooks';
import LeaderboardCard from '../../Cards/LeaderboardCard/LeaderboardCard';
import "./LeaderboardPage.css";

export default function LeaderboardPage() {

    const { leaderboard, loading } = useFetchSelector(
        state => state.leaderboard,
        fetchLeaderboard,
    );

    return (
        <section >
            <div className='leaderboardList'>
                <ul className='noBulletsList'>
                    {
                        !loading && leaderboard.map((it, i) => {

                            return (
                                <li>
                                    <LeaderboardCard key={it.id} rank={i + 1} user={it} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
