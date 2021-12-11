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

    return navState;
}

export default function RootPage({ children, ...props }) {
    
    const mode = useScreenMode();
    
    return (
        <div>
            <Navbar className={mode}/>

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
