"use client"

import React, { useState, useEffect } from 'react'
import styles from "@/Styles/languages/hindi.module.scss"
import Link from 'next/link';

const page = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=health&language=hi");
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
            <div className={styles.header}>
                <h1>Hindi News</h1>
            </div>
            <div className={styles.content}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            {item.image_url && (
                                <img
                                    src={item.image_url}
                                    alt={item.title || "News image"}
                                    className={styles.image}
                                />
                            )}
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.description}>{item.description}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Read More
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default page;