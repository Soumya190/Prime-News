"use client";

import React, { useState, useEffect } from "react";
// import styles from "@/Styles/MainSection/mainSection.module.scss";
import { Header } from "@/Components/Header/Header";
import styles from "@/Styles/languages/malayalam.module.scss"
import Link from "next/link";

const Malayalam = ({ onSelect, setOnSelect }) => {
    const [data, setData] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&q=stocks&language=en&size=10`
                );
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
            <div className={styles.mainContainer}>
                <div className={styles.content1}>
                    <h1>Malayalam News</h1>
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
                <div className={styles.content2}>

                </div>
            </div>
        </>
    );
};

export default Malayalam;