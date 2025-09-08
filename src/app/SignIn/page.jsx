import React from 'react'
import styles from '@/Styles/SignIn/signin.module.scss'
import Link from 'next/link'

const SignIn = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonDiv}>
                    <Link href="/">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#008040" d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/></svg>
                    </button>
                    </Link>
                    <p>Back to the main page</p>
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.content1}>
                    <img src="/signin.svg" alt="signin_img" />
                </div>
                <div className={styles.content2}>
                    <h1>SignUp/Login</h1>
                    <button className={styles.btn1}>Enter Mobile Number or email ID</button>
                    <button className={styles.btn2}>Continue</button>
                    <div className={styles.line}>
                        <hr />
                        <p>Or</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;