import React from 'react'
import PageSection from '../../PageSection/PageSection'

export default function ErrorPage({ children }) {
    return (
        <PageSection >
            <div className='error'>
                <h1>{children}</h1>
            </div>
        </PageSection>
    )
}
