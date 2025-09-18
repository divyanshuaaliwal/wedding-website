'use client'

import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {
    
    const [form, setForm] = useState({
        emailOrPhone: '',
        password: ''
    });
   
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Login data:', form);
    }

    return (
        <div className={styles.pageBg}>
            <div className={styles.overlay} />
            <div>
                <video autoPlay muted loop playsInline className={styles.video}>
                    <source src="/189020-884234925_large.mp4" type="video/mp4" />
                </video>

                <form className={styles.card} onSubmit={handleSubmit} noValidate>
                    
                    <div className={styles.header}>
                        <h2 className={styles.title}>Login</h2>
                    </div>

                    <label className={styles.field}>
                        <span>Email or Phone</span>
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={form.emailOrPhone}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label className={styles.field}>
                        <span>Password</span>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" className={styles.nextBtn}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
