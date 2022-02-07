import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./Auth.module.css"
import { login } from "./authSlice"

export default function LoginSection({onLogin}) {

    const [loginState, setLoginState] = useState({
        id: null,
        password: null,
    })

    const dispatch = useDispatch();

    function formSubmit(e) {
        e.preventDefault();
        dispatch(login(loginState));
        onLogin();        

    }
    return (
        <div className={styles.formContainer}>

            <form className={styles.loginForm} onSubmit={formSubmit}>
                <input
                    className='formInput'
                    type="text" placeholder="ID"
                    onChange={(e) => setLoginState({ ...loginState, id: e.target.value })}
                />

                <input
                    className='formInput'
                    type="password" placeholder="Password"
                    onChange={(e) => setLoginState({ ...loginState, password: e.target.value })}
                />

                <button className='formSubmit' type="submit">Login</button>
                <hr />
            </form>

            <div className={styles.registerAlert}>
                Don't have an account? <button>Register</button>
            </div>
        </div>
    );
}
