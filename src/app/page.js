"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Header } from "@/Components/Header/Header";
import { MainSection } from "@/Components/MainSection";

export default function Home() {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className={styles.MainContainer}>
      <MainSection  />
      {/* <Header searchItem={searchItem} setSearchItem={setSearchItem} /> */}
    </div>
  );
}
