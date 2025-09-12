"use client"

import React, { useState } from 'react'
import styles from '@/Styles/SignIn/signin.module.scss'
import Link from 'next/link'

const SignIn = () => {
    const [InputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (InputValue === "" || InputValue === null) {
            alert("Please enter your email or username");
            return;
        }
        if (password !== "" && password !== null) {
            if (password.length > 8) {
                if (password !== "@" || password !== "#" || password !== "$" || password !== "%" || password !== "&" || password !== "*") {
                    alert("Password must contain at least one special character");
                    return;
                }
                else if(password=== password.toLowerCase()){
                    alert("Password must contain at least one uppercase letter");
                    return;
                }
                else if(password== password.toUpperCase()){
                    alert("Password must contain at least one lowercase letter");
                    return;
                }
                else if(password=="1234567890"||password=="password"||password=="qwerty"||password=="admin"){
                    alert("Password is too common, please choose a stronger password");
                    return;
                }
            }
            else{
                alert("Password must be at least 8 characters long");
            }
        }
        
        else{
            alert("Please enter your password");
            return;
        }
        // console.log("button clicked");

    }

    return (
        <div className={styles.signInContainer}>
            <Link href="/">
                <button className={styles.backBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="black" d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" /></svg>
                </button>
            </Link>
            <div className={styles.signInHeader}>
                <p className={styles.heading}>Log in</p>
                <p className={styles.para}>Sign in to access your Account</p>
            </div>
            <div className={styles.inputContainer1}>
                <label >Your username or email</label>
                <div className={styles.inputBox1}>
                    <input type="text" placeholder='user@example.com' value={InputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                </div>
            </div>
            <div className={styles.inputContainer2}>
                <label>Password</label>
                <div className={styles.inputBox2}>
                    <input type="text" placeholder='************' onClick={(e) => setPassword(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" /></svg>
                </div>
            </div>
            <div className={styles.options}>
                <div className={styles.rememberMe}>
                    <div className={styles.select}></div>
                    <p>Remember me</p>
                </div>
                <p>Forgot your password?</p>
            </div>
            <Link href="" >
                <button onClick={handleSubmit} className={styles.signInBtn}>
                    Sign in
                </button>
            </Link>
            <div className={styles.signInLine}>
                <hr />
                <p>or</p>
                <hr />
            </div>
            <div className={styles.signInOptions}>
                <button className={styles.googleBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg>
                </button>
                <button className={styles.appleBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" /></svg>
                </button>
                <button className={styles.microsoftBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M96 96L310.6 96L310.6 310.6L96 310.6L96 96zM329.4 96L544 96L544 310.6L329.4 310.6L329.4 96zM96 329.4L310.6 329.4L310.6 544L96 544L96 329.4zM329.4 329.4L544 329.4L544 544L329.4 544L329.4 329.4z" /></svg>
                </button>
            </div>
            <div className={styles.signupOption}>
                <p>Create a new Account .
                    <button>Sign up</button>
                </p>
            </div>
        </div>
    )
}

export default SignIn;