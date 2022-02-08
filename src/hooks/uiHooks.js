import { useState, useEffect } from "react";

export function useScreenMode(breakWidth = 700) {

    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    const [navState, setNavState] = useState()

    useEffect(() => {
        if (width < breakWidth) {
            setNavState("navRail")
        }
        else {
            setNavState("navDrawer")
        }
    }, [width, breakWidth]);

    const switchNavState = () => setNavState(navState === "navRail" ? "navDrawer" : "navRail");
    return [navState, switchNavState];
}