import React from 'react'
import "./Navbar.css"
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { ReactComponent as QuestionIcon } from '../../assets/questions.svg'
import { ReactComponent as LeaderboardIcon } from '../../assets/leaderboard.svg'

import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'
import Logo from '../Logo/Logo'
import NavAction from './NavAction'
import NavUser from './NavUser'
import { useSelector } from 'react-redux'



export default function Navbar({ className }) {

    const user = useSelector(state => state.auth.user)
    return (
        <nav
            className={className}
        >

            {/* <Logo /> */}
            <ul>
                <NavAction icon={<AddIcon/>} title="Ask a Question" />

                <NavItem icon={<QuestionIcon />} title="Questions" path="/" />
                <NavItem icon={<LeaderboardIcon />} title="Leaderboard" path="/leaderboard" />

                <NavUser user={user}/>
            </ul>
        </nav>
    )
}
