import React from 'react'
import "./Navbar.css"
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { ReactComponent as QuestionIcon } from '../../assets/questions.svg'
import { ReactComponent as LeaderboardIcon } from '../../assets/leaderboard.svg'

import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'



export default function Navbar() {
    return (
        <nav>
            <button className="fab">
                <AddIcon />
            </button>

            <ul>
                <NavItem icon={<QuestionIcon />} title="Questions" path="/" />
                <NavItem icon={<LeaderboardIcon />} title="Leaderboard" path="/leaderboard" />
            </ul>
        </nav>
    )
}
