"use client";

import React, { useState, useEffect } from "react";
import styles from "@/Styles/MainSection/mainSection.module.scss";
import { Header } from "./Header/Header";

export const MainSection = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=business&language=en&size=10`
        );
        const json = await res.json();

        let seenArticle = new Set();
        let filteredNews = [];

        json.results.forEach((article) => {
          const titleKey = article.title?.trim().toLowerCase();

          if (
            Array.isArray(article.category) &&
            article.category.length > 0 &&
            typeof article.category[0] === "string" &&
            article.category[0].trim() !== "" &&
            article.category[0] !== "undefined"
          ) {
            if (!seenArticle.has(titleKey)) {
              seenArticle.add(titleKey);
              filteredNews.push(article);
            }
          }
        });

        setData(filteredNews);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ filter news based on search input
  const filteredData = data.filter((item) =>
    item.category?.some((cat) =>
      cat.toLowerCase().includes(searchItem.toLowerCase())
    )
  );

  return (
    <>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
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
  );
};
