import React from 'react'
import "./PageSection.css"
import { PropagateLoader } from 'react-spinners'
export default function PageSection({ header, headerExtra, loading, children }) {
    return (
        <section>

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
                <div className='loadingWrapper'>
                    <PropagateLoader />
                </div>
                :
                children}
        </section>
    )
}
