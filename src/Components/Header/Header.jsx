import React from 'react'
import styles from "@/Styles/Header/header.module.scss";

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.logo}>
            <h1>PRIME NEWS</h1>
            {/* <p>Stay updated with the latest news</p> */}
            <p>English</p>
            <p>Malayalam</p>
            <p>Bengali</p>
            <p>Hindi</p>
            <p>Telugu</p>
            <p>Marathi</p>
            <p>Gujarati</p>
            <p>Tamil</p>
            <p>Kannada</p>
            <p>Punjabi</p>
            <p>Urdu</p>
            <p>Oriya</p>
            <p>Assamese</p>
        </div>
        <div className={styles.searchBar}>
          <h1>PRIME NEWS</h1>
          <input type="text" placeholder='Enter your search' />
          <button>Categories</button>
        </div>
    </div>
  )
}
