"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { SectionHeader, Wrapper } from "../mainLayout";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (
            formData.phone &&
            !/^\+?\d{7,15}$/.test(formData.phone.trim())
        ) {
            newErrors.phone = "Invalid phone number";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({});
        }
    };

    return (
        <Wrapper>
           <SectionHeader
            title="Contact Us"
            description="We'd love to hear from you. Fill out the form below and our team will get back to you shortly."
            />


            <div className={styles.contactContainer}>
                <form
                    className={styles.contactForm}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className={styles.errorText}>{errors.name}</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && (
                                <p className={styles.errorText}>{errors.phone}</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>
            </div>
        </Wrapper>
    );
}
