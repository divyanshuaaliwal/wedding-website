"use client"

import React from 'react'
import styles from './HeroSectionForm.module.css'

const HeroSectionForm = () => {
    return (
        <div className={styles.overlay}>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    No. 1 Matchmaking Service for Elites
                </h1>
                <p className={styles.subtitle}>
                    5 Times higher success rates | Assured meetings | Top consultants
                </p>
            </div>
           

            <form className={styles.form}>
                
                <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    className={styles.input}
                />
                
                <div className={styles.phoneContainer}>
               
                    <input
                        type="text"
                        name="countryCode"
                        placeholder="+91"
                        className={styles.inputSmall}
                    />
                    
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile No."
                        className={styles.input}
                    />

                </div>
                
                <input
                    type="text"
                    name="aadhar"
                    placeholder="Aadhar No."
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>
                    Get Invited →
                </button>
            </form>

        </div>
    )
}

export default HeroSectionForm