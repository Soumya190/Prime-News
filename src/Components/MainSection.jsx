// MainSection.jsx
"use client";

import React, { useState, useEffect } from 'react'
import styles from '@/Styles/MainSection/mainSection.module.scss'
import { Header } from './Header/Header'

export const MainSection = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=business&language=en&size=10`);
        const data = await res.json();

        let seenArticle = new Set();
        let filteredNews = [];
        data.results.forEach((article)=>{
          const titleKey = article.title?.trim().toLowerCase();
          if(!seenArticle.has(titleKey)){
            seenArticle.add(titleKey);
            filteredNews.push(article);
          }
        });

        setData(filteredNews);
        setFilteredData(filteredNews); // initially show all
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header ApiData={data} setFilteredData={setFilteredData} />
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <p>INDIA</p>
          <p>SOUTH</p>
          <p>TV</p>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            {filteredData.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.news}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div className={styles.imageDiv}>
                  <img src={item.image_url} alt="news_img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
