import React from 'react'
import "./Navbar.css"
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'
import { ReactComponent as QuestionIcon } from '../../assets/icons/questions.svg'
import { ReactComponent as LeaderboardIcon } from '../../assets/icons/leaderboard.svg'
import NavItem from './NavItem'
import NavAction from './NavAction'
import NavUser from './NavUser'
import { useSelector } from 'react-redux'
import NavMenu from './NavMenu'
import { useDispatch } from 'react-redux'
import { logout } from '../auth/authSlice'
import { clear } from '../questions/questionsSlice'



export default function Navbar({ className, onMenuClicked }) {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(logout());
        dispatch(clear());
    }

    return (
        <nav className={className}>
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
