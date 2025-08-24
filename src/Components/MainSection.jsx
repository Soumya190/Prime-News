"use client"

import React, { useState, useEffect } from 'react'
import styles from '@/Styles/MainSection/mainSection.module.scss'

export const MainSection = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=business&language=en&size=10");
                console.log(res);
                const data = await res.json();
                console.log(data);

                setData(data.results || []);
            }
            catch (err) {
                console.error("Error fetching data:", err);
            }
        }

        fetchData();
    }, []);


    return (
        <div className={styles.mainContainer}>
            <div className={styles.sidebar}>
                <p>INDIA</p>
                <p>SOUTH</p>
                <p>TV</p>
            </div>
            <div className={styles.mainContent}>
                {/* <div className={styles.header}>
                    <h1>Hindi News</h1>
                </div> */}
                <div className={styles.content}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.news}>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.imageDiv}>
                                    <img src={item.image_url} alt="news_img" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
