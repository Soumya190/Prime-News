"use client";

import React, { useState, useEffect } from 'react'
import styles from "@/Styles/Header/header.module.scss";
import Link from 'next/link';
import { MainSection } from '../MainSection';

export const Header = ({ searchItem, setSearchItem, onSelect, setOnSelect }) => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  // const [isIconClosed,setIsIconClosed]

  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  }

  const handleCloseMenu = () => {
    setIsIconClicked(false);
  }

  // console.log(searchItem);
  
  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBar}>
        <svg xmlns="http://www.w3.org/2000`/svg" onClick={handleIconClick} className={styles.hamburgerIcon} viewBox="0 0 640 640"><path fill="#000000" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
        {isIconClicked && (
          <>
            <div className={styles.hamburgerContainer}>
              <div className={styles.close_menu} onClick={handleCloseMenu}>×</div>
              <div className={styles.hamburgerContent}>
                <div className={styles.signin}>
                  <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fffdfdff" d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" /></svg>
                  </div>
                  <Link href="/Login">
                    <button>Login</button>
                  </Link>
                </div>
                <div className={styles.hamburger}>
                  <div className={styles.hotNews}>
                    <div className={styles.hotIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z"/></svg>
                    </div>
                    <p>Hot News</p>
                  </div>
                  <div className={styles.hindiNews}>
                    <p>Hindi</p>
                  </div>
                  <div className={styles.Malayalam}>
                    <p>Malayalam</p>
                  </div>
                  <div className={styles.Bengali}>
                    <p>Bengali</p>
                  </div>
                  <div className={styles.Telugu}>
                    <p>Telugu</p>
                  </div>
                  <div className={styles.Marathi}>
                    <p>Marathi</p>
                  </div>
                  <div className={styles.Tamil}>
                    <p>Tamil</p>
                  </div>
                  <div className={styles.Kannada}>
                    <p>Kannada</p>
                  </div>
                  <div className={styles.Punjabi}>
                    <p>Punjabi</p>
                  </div>
                  <div className={styles.Urdu}>
                    <p>Urdu</p>
                  </div>
                  <div className={styles.Oriya}>
                    <p>Oriya</p>
                  </div>
                  <div className={styles.Assamese}>
                    <p>Assamese</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
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
            <option value="business">Business  &#9660;</option>
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
