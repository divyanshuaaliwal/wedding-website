"use client"

import { useState } from 'react';
import styles from './register.module.css'; // keep your css module

export default function RegisterForm() {

    const [form, setForm] = useState({

        fullName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: null,
        permanentHouse: '',
        permanentStreet: '',
        permanentArea: '',
        permanentCity: '',
        permanentState: '',
        permanentCountry: '',
        permanentPin: '',
        presentHouse: '',
        presentStreet: '',
        presentArea: '',
        presentCity: '',
        presentState: '',
        presentCountry: '',
        presentPin: '',
        gender: '',
        aadhar: null,
        fatherName: '',
        fatherMobile: '',
        motherName: '',
        motherMobile: '',
        dob: '',
        tob: '',
        pob: '',
        education: '',
        specialization: '',
        profession: '',
        companyName: '',
        income: '',
        commercialAddress: '',
        color: '',
        height: '',
        weight: '',
        disease: '',
        familyMembers: '',
        nukh: '',
        aakay: '',
        origin: '',
        jointIncome: '',
        house: '',
        vehicle: '',
        ancestralBusiness: '',
        ancestralBusinessAddress: '',
        ancestralBusinessMobile: '',
        maritalStatus: '',
        comments: ''
    });

    const [step, setStep] = useState(0);

    const steps = ['Basic', 'Personal', 'Family'];

    function handleChange(e) {
        const { name, value, files, type } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file'
                ? (files ? Array.from(files).slice(0, 5) : []) // limit 5 photos
                : value
        }));
    }


    function handleNext(e) {
        e.preventDefault();
        if (step < steps.length - 1) {
            setStep(s => s + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            console.log('Submit data:', form);
            alert('Form submitted ✅');
        }
    }

    function handleBack() {
        if (step > 0) setStep(s => s - 1);
    }

    return (
        <div className={styles.pageBg}>
            <div className={styles.overlay} />
            <div>

                <video autoPlay muted loop playsInline className={styles.video}>
                    <source src="/189020-884234925_large.mp4" type="video/mp4" />
                </video>

                <form className={styles.card} onSubmit={handleNext} noValidate>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Register</h2>
                        <div className={styles.steps}>
                            {
                                steps.map((s, i) => (
                                    <div key={s} className={`${styles.step} ${i === step ? styles.active : ''}`}>
                                        <strong>{s}</strong>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Step 1: Basic */}
                    {step === 0 && (
                        <>
                            <label className={styles.field}>
                                <span>Full Name</span>
                                <input name="fullName" value={form.fullName} onChange={handleChange} required />
                            </label>
                            <label className={styles.field}>
                                <span>Mobile</span>
                                <input name="mobile" value={form.mobile} onChange={handleChange} required />
                            </label>
                            <label className={styles.field}>
                                <span>Email</span>
                                <input name="email" value={form.email} onChange={handleChange} type="email" />
                            </label>
                            <label className={styles.field}>
                                <span>Password</span>
                                <input type="password" name="password" value={form.password} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Confirm Password</span>
                                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
                            </label>
                        </>
                    )}

                    {/* Step 2: Personal */}
                    {step === 1 && (
                        <>
                            <div className={styles.images}>
                               
                                <label className={styles.fieldFull}>
                                    <span>Upload Photos (4–5)</span>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={handleChange}
                                        accept="image/*"
                                        multiple
                                    />
                                </label>

                                {/* ✅ Show image previews */}
                                {form.photo && form.photo.length > 0 && (
                                    <div className={styles.previewGrid}>
                                        {form.photo.map((file, idx) => (
                                            <img
                                                key={idx}
                                                src={URL.createObjectURL(file)}
                                                alt={`preview-${idx}`}
                                                className={styles.previewImg}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>


                            <fieldset className={styles.group}>
                                <legend>Permanent Address</legend>
                                <div className={styles.addrGrid}>
                                    <input name="permanentHouse" placeholder="House No." onChange={handleChange} />
                                    <input name="permanentStreet" placeholder="Street/Colony" onChange={handleChange} />
                                    <input name="permanentArea" placeholder="Area" onChange={handleChange} />
                                    <input name="permanentCity" placeholder="City" onChange={handleChange} />
                                    <input name="permanentState" placeholder="State" onChange={handleChange} />
                                    <input name="permanentCountry" placeholder="Country" onChange={handleChange} />
                                    <input name="permanentPin" placeholder="Pin Code" onChange={handleChange} />
                                </div>
                            </fieldset>

                            <fieldset className={styles.group}>
                                <legend>Present Address</legend>
                                <div className={styles.addrGrid}>
                                    <input name="presentHouse" placeholder="House No." onChange={handleChange} />
                                    <input name="presentStreet" placeholder="Street/Colony" onChange={handleChange} />
                                    <input name="presentArea" placeholder="Area" onChange={handleChange} />
                                    <input name="presentCity" placeholder="City" onChange={handleChange} />
                                    <input name="presentState" placeholder="State" onChange={handleChange} />
                                    <input name="presentCountry" placeholder="Country" onChange={handleChange} />
                                    <input name="presentPin" placeholder="Pin Code" onChange={handleChange} />
                                </div>
                            </fieldset>

                            <label className={styles.field}>
                                <span>Gender</span>
                                <select name="gender" value={form.gender} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>

                            <label className={styles.field}>
                                <span>Aadhar Card</span>
                                <input type="file" name="aadhar" onChange={handleChange} accept=".pdf,image/*" />
                            </label>

                            <label className={styles.field}>
                                <span>Father’s Name</span>
                                <input name="fatherName" value={form.fatherName} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Father’s Mobile</span>
                                <input name="fatherMobile" value={form.fatherMobile} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Mother’s Name</span>
                                <input name="motherName" value={form.motherName} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Mother’s Mobile</span>
                                <input name="motherMobile" value={form.motherMobile} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Date of Birth</span>
                                <input type="date" name="dob" value={form.dob} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Time of Birth</span>
                                <input type="time" name="tob" value={form.tob} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Place of Birth</span>
                                <input name="pob" value={form.pob} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Education</span>
                                <input name="education" value={form.education} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Specialization</span>
                                <input name="specialization" value={form.specialization} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Profession</span>
                                <input name="profession" value={form.profession} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Company Name</span>
                                <input name="companyName" value={form.companyName} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Income</span>
                                <input name="income" value={form.income} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Commercial Address</span>
                                <input name="commercialAddress" value={form.commercialAddress} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Color</span>
                                <input name="color" value={form.color} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Height</span>
                                <input name="height" value={form.height} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Weight</span>
                                <input name="weight" value={form.weight} onChange={handleChange} />
                            </label>

                            <label className={styles.field}>
                                <span>Disease (if any)</span>
                                <input name="disease" value={form.disease} onChange={handleChange} />
                            </label>
                        </>
                    )}

                    {/* Step 3: Family */}
                    {step === 2 && (
                        <>
                            <label className={styles.field}>
                                <span>Family Members</span>
                                <textarea name="familyMembers" value={form.familyMembers} onChange={handleChange}></textarea>
                            </label>
                            <label className={styles.field}>
                                <span>Nukh</span>
                                <input name="nukh" value={form.nukh} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Aakay</span>
                                <input name="aakay" value={form.aakay} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Origin</span>
                                <input name="origin" value={form.origin} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Joint Income (Family)</span>
                                <input name="jointIncome" value={form.jointIncome} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>House</span>
                                <select name="house" value={form.house} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="own">Own</option>
                                    <option value="rent">Rent</option>
                                </select>
                            </label>
                            <label className={styles.field}>
                                <span>Vehicle</span>
                                <input name="vehicle" value={form.vehicle} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Ancestral/Professional Business</span>
                                <input name="ancestralBusiness" value={form.ancestralBusiness} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Business Address</span>
                                <input name="ancestralBusinessAddress" value={form.ancestralBusinessAddress} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Business Mobile Number</span>
                                <input name="ancestralBusinessMobile" value={form.ancestralBusinessMobile} onChange={handleChange} />
                            </label>
                            <label className={styles.field}>
                                <span>Marital Status</span>
                                <select name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="unmarried">Unmarried</option>
                                    <option value="divorced">Divorced</option>
                                    <option value="separated">Relation Separated</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label className={styles.field}>
                                <span>Other Comments</span>
                                <textarea name="comments" value={form.comments} onChange={handleChange}></textarea>
                            </label>
                        </>
                    )}

                    <div className={styles.controls}>
                        {step > 0 && (
                            <button type="button" className={styles.ghostBtn} onClick={handleBack}>
                                Back
                            </button>
                        )}
                        <button type="submit" className={styles.nextBtn}>
                            {step === steps.length - 1 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
