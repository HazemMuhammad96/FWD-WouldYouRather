import React from 'react'

export function useStickyObserver(observed, stuckClass,) {
    React.useEffect(() => {
        const el = document.querySelector(`.${observed}`);
        const observer = new IntersectionObserver(
            ([e]) => {
                e.target.toggleAttribute(`${stuckClass}`, e.intersectionRatio < 1)
            },
            { threshold: [1] }
        );

        observer.observe(el);

        return () => observer.unobserve(el);
    }, []);
}