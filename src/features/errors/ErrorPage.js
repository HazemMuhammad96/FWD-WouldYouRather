import React from 'react'
import PageSection from '../common/section/PageSection'
import styles from './ErrorPage.module.css'

export default function CustomErrorPage({ code, desc }) {
    return (
        <PageSection header="ERROR!">
            <div className={styles.container}>
                <div className={styles.code}>{code}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
        </PageSection>
    )
}

export function NotFoundErrorPage() {
    return (
        <CustomErrorPage
            code={404}
            desc={'Page not found!'}
        />
    )
}