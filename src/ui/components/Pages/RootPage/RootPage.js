import React, { useEffect, useState } from 'react'
import { Routes } from 'react-router'
import Navbar from "../../Nav/Navbar"

function useScreenMode() {
    //function get the width of the document 
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    const [navState, setNavState] = useState()

    useEffect(() => {
        if (width < 700) {
            setNavState("navRail")
        }
        else {
            setNavState("navDrawer")
        }
    }, [width]);

    const switchNavState = () => setNavState(navState === "navRail" ? "navDrawer" : "navRail");
    return [navState, switchNavState];
}

export default function RootPage({ children, ...props }) {

    const [mode, switchMode] = useScreenMode();

    return (
        <div>
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
