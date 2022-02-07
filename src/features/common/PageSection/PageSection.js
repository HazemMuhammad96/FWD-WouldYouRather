import React from 'react'
import styles from "./PageSection.css"
import { PropagateLoader } from 'react-spinners'

export default function PageSection({ header, headerExtra, loading, children, ...props }) {
    return (
        <section {...props}>

            {header &&
                <header>
                    {header}
                    {headerExtra &&
                        <div>
                            {headerExtra}
                        </div>
                    }
                </header>
            }
            {loading ?
                <div className={"loadingWrapper"}>
                    <PropagateLoader />
                </div>
                :
                children}
        </section>
    )
}
