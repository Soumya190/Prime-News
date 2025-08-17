"use client";

import React,{useState,useEffect} from 'react'
import styles from "@/Styles/Header/header.module.scss";
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <h1>PRIME NEWS</h1>
        {/* <p>Stay updated with the latest news</p> */}
        <p className={styles.english}>English</p>
        <p className={styles.malayalam}>Malayalam</p>
        <p className={styles.bengali}>Bengali</p>
        <Link href="/Languages/Hindi" className={styles.hindi}>
        <p >Hindi</p>
        </Link>
        <p className={styles.telugu}>Telugu</p>
        <p className={styles.marathi}>Marathi</p>
        <p className={styles.gujarati}>Gujarati</p>
        <p className={styles.tamil}>Tamil</p>
        <p className={styles.kannada}>Kannada</p>
        <p className={styles.punjabi}>Punjabi</p>
        <p className={styles.urdu}>Urdu</p>
        <p className={styles.oriya}>Oriya</p>
        <p className={styles.assamese}>Assamese</p>
      </div>
      <div className={styles.searchBar}>
        <h1>PRIME NEWS</h1>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
            <input type="text"  placeholder='Enter your search' />
          </div>
          <button>Categories</button>
        </div>
      </div>
    </div>
  )
}
