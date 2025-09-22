"use client";

import React, { useState, useEffect } from 'react'
import styles from "@/Styles/Header/header.module.scss";
import Link from 'next/link';
import { MainSection } from '../MainSection';

export const Header = ({ searchItem, setSearchItem, onSelect, setOnSelect }) => {

  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.logo}>
        <h1>PRIME NEWS</h1>
        <Link href="/Languages/Malayalam" className={styles.malayalam}>
          <p className={styles.malayalam}>Malayalam</p>
        </Link>
        <Link href="/Languages/Bengali" className={styles.bengali}>
          <p className={styles.bengali}>Bengali</p>
        </Link>
        <Link href="/Languages/Hindi" className={styles.hindi}>
          <p >Hindi</p>
        </Link>
        <Link href="/Languages/Telugu" className={styles.telugu}>
          <p className={styles.telugu}>Telugu</p>
        </Link>
        <Link href="/Languages/Marathi" className={styles.marathi}>
          <p className={styles.marathi}>Marathi</p>
        </Link>
        <Link href="/Languages/Tamil" className={styles.tamil}>
          <p className={styles.gujarati}>Gujarati</p>
        </Link>
        <Link href="/Languages/Tamil" className={styles.tamil}>
          <p className={styles.tamil}>Tamil</p>
        </Link>
        <Link href="/Languages/Kannada" className={styles.kannada}>
          <p className={styles.kannada}>Kannada</p>
        </Link>
        <Link href="/Languages/Punjabi" className={styles.punjabi}>
          <p className={styles.punjabi}>Punjabi</p>
        </Link>
        <Link href="/Languages/Urdu" className={styles.urdu}>
          <p className={styles.urdu}>Urdu</p>
        </Link>
        <Link href="/Languages/Oriya" className={styles.oriya}>
          <p className={styles.oriya}>Oriya</p>
        </Link>
        <Link href="/Languages/Assamese" className={styles.assamese}>
          <p className={styles.assamese}>Assamese</p>
        </Link>
      </div> */}
      <div className={styles.searchBar}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.hamburgerIcon} viewBox="0 0 640 640"><path fill="#000000" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
        <h1>PRIME NEWS</h1>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
            </svg>
            <input
              type="text"
              placeholder="Enter your search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
          <select value={onSelect} onChange={(e) => setOnSelect(e.target.value)}>
            <option value="business">Business</option>
            <option value="entertainment" >Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Politics">Politics</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
          </select>
        </div>
      </div>
    </div>
  )
}
