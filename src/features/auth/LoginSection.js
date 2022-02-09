import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from "./Auth.module.css"
import { login } from "./authSlice"

export default function LoginSection({ onLogin }) {

    const [loginState, setLoginState] = useState({
        id: "sarahedo",
        password: "Abc@1234",
    })

    const dispatch = useDispatch();

    function formSubmit(e) {
        e.preventDefault();
        dispatch(login(loginState));
        onLogin();

    }

    return (

        <>
        <form className={styles.loginForm} onSubmit={formSubmit}>
                <input
                    className='formInput'
                    type="text" placeholder="ID"
                    value={loginState.id}
                    onChange={(e) => setLoginState({ ...loginState, id: e.target.value })}
                />

                <input
                    className='formInput'
                    value={loginState.password}
                    type="password" placeholder="Password"
                    onChange={(e) => setLoginState({ ...loginState, password: e.target.value })}
                />

                <button className='formSubmit' type="submit">Login</button>
                <hr />
            </form>

            <div className={styles.registerAlert}>
                Don't have an account? <button>Register</button>
            </div>
            </>
    );
}
