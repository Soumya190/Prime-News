"use client"

import React, { useState } from 'react'
import styles from '@/Styles/Login/Login.module.scss'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'


const Login = () => {
    const session = useSession();
    console.log(session);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ispasswordValid, setIsPasswordValid] = useState(false);
    const [isemailValid, setIsEmailValid] = useState(false);
    const [buttonClickValid, setButtonClickValid] = useState(false);

    const emailVerification = () => {
        if (email.length > 0 && email !== null && email !== "") {
            const trimmedEmail = email.trim();
            const includesAt = email.includes('@' && '.com' && 'gmail' || 'io' || 'net' || 'org');
            // const lowerCaseIncludes = includesAt.toLowerCase();
            const lowerCaseEmail = email.toLowerCase();
            // const validEmail = email.trim(' ').toLowerCase().includes('@'&&'.com'&&'gmail'||'io'||'net'||'org');
            if (trimmedEmail && lowerCaseEmail && includesAt) {
                const varifyEmail = email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$|\\.com|\\.io|\\.net|\\.org');
                if (varifyEmail) {
                    setEmail(email);
                    console.log(email);
                    
                    setIsEmailValid(true);

                }
                else {
                    alert("Please enter a valid email address");
                }
            }
            else {
                alert("Please enter a valid email address");
            }

            // .match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')

        }
        else {
            alert("Please enter your email");
            // console.log("Please enter your email");
            
        }
    }

    const passwordVerification = () => {
        if (password.length > 0 && password !== null && password !== "") {
            // password.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')&& password.match('[@#\$%\^&\*\(\)_\-\+=]')&& 
            if (password.length >= 8) {
                // const validPassword = password.match('[0-9]');
                const verifyNumber = password.match('[0-9]');
                const verifyUppercase = password.match('[A-Z]');
                const verifyLowercase = password.match('[a-z]');
                const verifySpecialChar = password.match('[@#\$%\^&\*\]');
                if (verifyNumber && verifyUppercase && verifyLowercase && verifySpecialChar) {
                    setPassword(password);
                    console.log(password);
                    setIsPasswordValid(true);
                }
                else if (!verifyNumber) {
                    alert("Password must contain at least one number");
                }
                else if (!verifyUppercase) {
                    alert("Password must contain at least one uppercase letter");
                }
                else if (!verifyLowercase) {
                    alert("Password must contain at least one lowercase letter");
                }
                else {
                    alert("Password must contain at least one special character");
                }

            }
            else {
                alert("Password must be at least 8 characters long");
            }
        }
        else {
            alert("Please enter your password");
        }
    }

    // passwordVerification();


    // console.log(buttonClickValid);


    const handleSubmit = () => {
        // if (email.length > 0 && password.length > 0) {
            emailVerification();
            passwordVerification();
            if (isemailValid === true && ispasswordValid === true) {
                setButtonClickValid(true);
                // console.log(buttonClickValid);
            }
        // }
    }


    return (
        <div className={styles.loginmainContainer}>
            <Link href="/">
                <button className={styles.backBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="black" d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" /></svg>
                </button>
            </Link>
            <div className={styles.signInContainer}>
                <div className={styles.loginContent}>
                    <div className={styles.signInHeader}>
                        <p className={styles.heading}>Login</p>
                        <p className={styles.para}>Login to access your Account</p>
                    </div>
                    <div className={styles.inputContainer1}>
                        <label >Email</label>
                        <div className={styles.inputBox1}>
                            <input type="email" placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                        </div>
                    </div>
                    <div className={styles.inputContainer2}>
                        <label>Password</label>
                        <div className={styles.inputBox2}>
                            <input type="text" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
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
                    {/* <Link href=''> */}
                    {/* {buttonClickValid===true ? <Link href='/'><button className={styles.signInBtn} onClick={handleSubmit}>Login</button></Link> : <button className={styles.signInBtn}>Login</button>} */}
                    {/* <button className={styles.signInBtn} onClick={handleSubmit}>Login</button> */}
                    {buttonClickValid === true ? <Link href='/'><button className={styles.signInBtn} onClick={handleSubmit}>Login</button></Link> : <button className={styles.signInBtn} onClick={handleSubmit}>Login</button>}
                    {/* </Link> */}
                    <div className={styles.signInLine}>
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>
                    <div className={styles.signInOptions}>
                        <button className={styles.googleBtn} onClick={()=>signIn("google")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg>
                        </button>
                        <button className={styles.twitterBtn} onClick={()=>signIn("twitter")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
                        </button>
                        <button className={styles.facebookBtn} onClick={()=>signIn("facebook")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
                        </button>
                    </div>
                    <div className={styles.signupOption}>
                        <p>Create a new Account .
                            <Link href='/signup'>
                                <button>Sign up</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;