"use client"

import React, { useState } from "react"
import styles from "./HeroSectionForm.module.css"

const HeroSectionForm = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        countryCode: "+91",
        mobile: "",
        aadhar: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // send to backend API here
    }

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

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />

                <div className={styles.phoneContainer}>
                    <input
                        type="text"
                        name="countryCode"
                        placeholder="+91"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className={styles.inputSmall}
                        required
                    />

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile No."
                        value={formData.mobile}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        
                    />
                </div>

                <input
                    type="text"
                    name="aadhar"
                    placeholder="Aadhar No."
                    value={formData.aadhar}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />

                <button type="submit" className={styles.button}>
                    Register →
                </button>
            </form>
        </div>
    )
}

export default HeroSectionForm
