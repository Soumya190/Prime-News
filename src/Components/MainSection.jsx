"use client";

import React, { useState, useEffect } from "react";
import styles from "@/Styles/MainSection/mainSection.module.scss";
import { Header } from "./Header/Header";
import Link from "next/link";

export const MainSection = ({ onSelect, setOnSelect }) => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [countPagination, setCountPagination] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [pageTokens, setPageTokens] = useState([null]);

  useEffect(() => {
    const fetchData = async (pageToken = null) => {
      try {
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&q=stocks&language=en&size=10`);
        const json = await res.json();
        console.log(json);


        let seenArticle = new Set();
        let filteredNews = [];

        json.results.forEach((article) => {
          const titleKey = article.title && article.description && article.image_url?.trim().toLowerCase();

          if (
            Array.isArray(article.keywords) &&
            article.keywords.length > 0 &&
            typeof article.keywords[0] === "string" &&
            article.keywords[0].trim() !== "" &&
            article.keywords[0] !== "undefined"
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
  }, [onSelect]);

  const filteredData = data.filter((item) =>
    item.keywords?.some((cat) =>
      cat.toLowerCase().includes(searchItem.toLowerCase())
    )
  );

  return (
    <>
      <Header searchItem={searchItem} setSearchItem={setSearchItem} onSelect={onSelect} setOnSelect={setOnSelect} />
      <div className={styles.mainContainer}>
        <div className={styles.Container}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fffdfdff" d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" /></svg>
              </div>
              <Link href="/Login">
                <button>Login</button>
              </Link>
            </div>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
            <p>INDIA</p>
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
        <div className={styles.pagination}>
          {countPagination != 1 ? (
            <button className={styles.prev} onClick={() => setCountPagination(prev => prev - 1)}>Prev</button>
          ) :
            <button className={styles.prev} disabled onClick={() => setCountPagination(countPagination)}>Prev</button>}
          <p>Page {countPagination} of 10</p>
          {countPagination != 10 ? (
            <button className={styles.next} onClick={() => setCountPagination(countPagination => countPagination + 1)}>Next</button>
          ) : <button className={styles.next} disabled onClick={() => setCountPagination(countPagination)}>Next</button>}
        </div>
      </div>
    </>
  );
};
