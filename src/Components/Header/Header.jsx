import React from 'react'
import styles from "@/Styles/Header/header.module.scss";

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <div>
            <h1>PRIME NEWS</h1>
            {/* <p>Stay updated with the latest news</p> */}
            <p>English</p>
            <p>Malayalam</p>
            <p>Bangla</p>
            <p></p>
        </div>
        <div>

        </div>
    </div>
  )
}
