import React from 'react'
import "./Navbar.css"
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { ReactComponent as QuestionIcon } from '../../assets/questions.svg'
import { ReactComponent as LeaderboardIcon } from '../../assets/leaderboard.svg'
import NavItem from './NavItem'
import NavAction from './NavAction'
import NavUser from './NavUser'
import { useSelector } from 'react-redux'
import NavMenu from './NavMenu'
import { useDispatch } from 'react-redux'
import { logout } from '../../../data/store/authSlice'
import { clear } from '../../../data/store/questionsSlice'



export default function Navbar({ className, onMenuClicked }) {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
        dispatch(clear());
    }

    return (
        <nav
            className={className}
        >

            {/* <Logo /> */}
            <ul>
                <NavMenu onClick={onMenuClicked}/>

                <NavAction icon={<AddIcon />} title="Ask a Question" action={'add'} />

                <NavItem icon={<QuestionIcon />} title="Questions" path="/" />
                <NavItem icon={<LeaderboardIcon />} title="Leaderboard" path="/leaderboard" />

                <NavUser user={user} onClick={() => onLogout()}/>
            </ul>
        </nav>
    )
}
