import React from 'react'
import { Routes } from 'react-router'
import { useScreenMode } from '../../hooks/uiHooks';
import Navbar from "../nav/Navbar"


export default function RootPage({ children, ...props }) {

    const [mode, switchMode] = useScreenMode();

    return (
        <div {...props}>
            <Navbar
                className={mode}
                onMenuClicked={() => switchMode()}
            />

            <main className={`m-${mode}`}>
                <Routes>
                    {
                        children
                    }
                </Routes>
            </main>
        </div>
    )
}
