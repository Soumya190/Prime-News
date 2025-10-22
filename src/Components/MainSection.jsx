"use client";

import React, { useState, useEffect } from "react";
import styles from "@/Styles/MainSection/mainSection.module.scss";
import { Header } from "./Header/Header";
import Link from "next/link";

export const MainSection = ({ onSelect, setOnSelect }) => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [countPagination, setCountPagination] = useState(1);
  const [historiNews, setHistoricNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [hotNews, setHotNews] = useState([]);
  const [cryptoNews, setCryptoNews] = useState([]);
  const [nextPage, setNextPage] = useState("1760738400517365268");
  const [pageTokens, setPageTokens] = useState([null]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&language=${selectedLanguage}&size=10`);
        const trendingNewsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=trending%20news&language=${selectedLanguage}&size=1`);
        const historicNewsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=historic%20news&size=1&language=${selectedLanguage}`);
        const hotNewsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=hot%20news&size=1&language=${selectedLanguage}`);
        const techNewsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=tech%20news&size=1&language=${selectedLanguage}`);
        const cryptoNewsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=crypto%20news&language=${selectedLanguage}&size=1`);
        const techNewsJson = await techNewsRes.json();
        const cryptoNewsJson = await cryptoNewsRes.json();
        const hotNewsJson = await hotNewsRes.json();
        const trendingNewsJson = await trendingNewsRes.json();
        const data = await res.json();
        const historicNewsJson = await historicNewsRes.json();
        console.log(hotNewsJson);
        console.log(techNewsJson);
        console.log(trendingNewsJson);
        console.log(cryptoNewsJson);
        console.log(data);

        console.log(historicNewsJson);

        setTrendingNews(trendingNewsJson.results);
        setCryptoNews(cryptoNewsJson.results);
        setHistoricNews(historicNewsJson.results);
        setHotNews(hotNewsJson.results);
        setTechNews(techNewsJson.results);
        setData(data.results);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [onSelect]&&[selectedLanguage]);

  const handleSelect = (e) => {
    const selectLanguage = e.target.value;
    setSelectedLanguage(selectLanguage);
    console.log(selectedLanguage);
    
  }



  useEffect(() => {
    if (searchItem !== "") {
      const filteredData = async () => {
        try {
          const filteredRes = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&q=${searchItem}&language=en&size=10`)
          const filteredJson = await filteredRes.json();
          console.log("Filtered Data:", filteredJson);
          setData(filteredJson.results);
        }
        catch (err) {
          console.error("Error fetching filtered data:", err);
        }
      }

      filteredData();
    }
  }, [searchItem]);


  // useEffect(() => {
  //   if(countPagination>1 && countPagination<=10){
  //   // useEffect(() => {
  //     const fetchNextPage = async () => {
  //       try {
  //         const data = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&q=stocks&language=en&size=10&page=${nextPage}`);
  //         const jsonData = await data.json();
  //         console.log(jsonData);
  //         // setData(jsonData.results);
  //         if (jsonData.nextPage) {
  //           setNextPage(jsonData.nextPage);
  //           setPageTokens((prevTokens) => [...prevTokens, jsonData.nextPage]);
  //         }
  //       } catch (err) {
  //         console.log("Error fetching next page:", err);
  //       }
  //     };

  //     fetchNextPage();
  //   // }, [countPagination]);
  // }
  // }, [countPagination]);

  // else if(searchItem!=)

  // useEffect(()=>{
  //   const fetchNextPage = async()=>{
  //     try{
  //       const data = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&category=${onSelect}&q=stocks&language=en&size=10&page="1760562000978366231"`);
  //       const jsonData = await data.json();
  //       console.log(jsonData);
  //       setData(jsonData.results);
  //     }
  //     catch(err){
  //       console.log("Error fetching next page:", err);
  //     }
  //   }

  //   fetchNextPage();
  // })

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
            <div className={styles.languageContainer}>
              <div className={styles.languageIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#FFFFFF" d="M192 64C209.7 64 224 78.3 224 96L224 128L352 128C369.7 128 384 142.3 384 160C384 177.7 369.7 192 352 192L342.4 192L334 215.1C317.6 260.3 292.9 301.6 261.8 337.1C276 345.9 290.8 353.7 306.2 360.6L356.6 383L418.8 243C423.9 231.4 435.4 224 448 224C460.6 224 472.1 231.4 477.2 243L605.2 531C612.4 547.2 605.1 566.1 589 573.2C572.9 580.3 553.9 573.1 546.8 557L526.8 512L369.3 512L349.3 557C342.1 573.2 323.2 580.4 307.1 573.2C291 566 283.7 547.1 290.9 531L330.7 441.5L280.3 419.1C257.3 408.9 235.3 396.7 214.5 382.7C193.2 399.9 169.9 414.9 145 427.4L110.3 444.6C94.5 452.5 75.3 446.1 67.4 430.3C59.5 414.5 65.9 395.3 81.7 387.4L116.2 370.1C132.5 361.9 148 352.4 162.6 341.8C148.8 329.1 135.8 315.4 123.7 300.9L113.6 288.7C102.3 275.1 104.1 254.9 117.7 243.6C131.3 232.3 151.5 234.1 162.8 247.7L173 259.9C184.5 273.8 197.1 286.7 210.4 298.6C237.9 268.2 259.6 232.5 273.9 193.2L274.4 192L64.1 192C46.3 192 32 177.7 32 160C32 142.3 46.3 128 64 128L160 128L160 96C160 78.3 174.3 64 192 64zM448 334.8L397.7 448L498.3 448L448 334.8z" /></svg>
              </div>
              <select >
                <option value="en" onClick={handleSelect}>English</option>
                <option value="as" onClick={handleSelect}>Assamese</option>
                <option value="bn" onClick={handleSelect}>Bengali</option>
                <option value="gu" onClick={handleSelect}>Gujarati</option>
                <option value="hi" onClick={handleSelect}>Hindi</option>
                <option value="kn" onClick={handleSelect}>Kannada</option>
                <option value="ma" onClick={handleSelect}>Malayalam</option>
                <option value="mr" onClick={handleSelect}>Marathi</option>
                <option value="or" onClick={handleSelect}>Oriya</option>
                <option value="pa" onClick={handleSelect}>Punjabi</option>
                <option value="ta" onClick={handleSelect}>Tamil</option>
                <option value="te" onClick={handleSelect}>Telugu</option>
                <option value="ur" onClick={handleSelect}>Urdu</option>
                <option value="fr" onClick={handleSelect}>French</option>
              </select>
            </div>
            <div className={styles.newsContainer}>
              <div className={styles.trendingNews}>
                <h1>Trending News</h1>
                {trendingNews.map((item, index) => (
                  <div key={index} className={styles.trendingCard}>
                    <div className={styles.trendingNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.trendingNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.historicNews}>
                <h1>Historic News</h1>
                {historiNews.map((item, index) => (
                  <div key={index} className={styles.historicCard}>
                    <div className={styles.historicNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.historicNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.hotNews}>
                <h1>Hot News</h1>
                {hotNews.map((item, index) => (
                  <div key={index} className={styles.hotCard}>
                    <div className={styles.hotNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.hotNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.techNews}>
                <h1>Tech News</h1>
                {techNews.map((item, index) => (
                  <div key={index} className={styles.techCard}>
                    <div className={styles.techNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.techNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cryptoNews}>
                <h1>Crypto News</h1>
                {cryptoNews.map((item, index) => (
                  <div key={index} className={styles.cryptoCard}>
                    <div className={styles.cryptoNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.cryptoNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cryptoNews}>
                <h1>Crypto News</h1>
                {cryptoNews.map((item, index) => (
                  <div key={index} className={styles.cryptoCard}>
                    <div className={styles.cryptoNewsImageDiv}>
                      <img src={item.image_url} alt="news_img" />
                    </div>
                    <div className={styles.cryptoNewsDetails}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link className={styles.block_level} href={item.link}><button>Show more</button></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* <button className={styles.language1}>Assamese</button>
            <button className={styles.language2}>Bengali</button>
            <button className={styles.language3}>Gujarati</button>
            <button className={styles.language4}>Hindi</button>
            <button className={styles.language5}>Kannada</button>
            <button className={styles.language6}>Malayalam</button>
            <button className={styles.language7}>Marathi</button>
            <button className={styles.language8}>Oriya</button>
            <button className={styles.language9}>Punjabi</button>
            <button className={styles.language10}>Tamil</button>
            <button className={styles.language11}>Telugu</button>
            <button className={styles.language12}>Urdu</button> */}
            {/* <p>TV</p> */}
          </div>
          <div className={styles.mainContent}>
            <div className={styles.content}>
              {data.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.news}>
                    <p className={styles.country_name}>{item.country}</p>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <Link href={item.link} >
                      <p className={styles.itemDetails}>Show more</p>
                    </Link>
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
