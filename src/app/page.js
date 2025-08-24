import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/Components/Header/Header";
import { MainSection } from "@/Components/MainSection";

export default function Home() {
  return (
    <div className={styles.MainContainer}>
      <Header />
      <MainSection/>
    </div>
  );
}
