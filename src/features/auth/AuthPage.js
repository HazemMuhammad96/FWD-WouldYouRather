import React from 'react'
import { useNavigate } from 'react-router';
import PageSection from '../common/section/PageSection';
import styles from "./Auth.module.css"
import { useLocation } from 'react-router-dom';
import LoginSection from './LoginSection';


export default function LoginPage() {

    const location = useLocation();
    const navigate = useNavigate();


    return (
        <PageSection
        >

            <div className={styles.loginPage}>

                <h2>Welcome to
                    <span style={{
                        color: 'var(--colorPrimary)'
                    }}>
                        {" Would You Rather "}
                    </span>
                    Game!
                </h2>


                <div className={styles.formContainer}>
                    <LoginSection
                        onLogin={() => {
                            navigate(location.pathname);
                        }}
                    />
                </div>
                


            </div>
        </PageSection>
    )
}
