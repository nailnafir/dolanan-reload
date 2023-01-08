import { Inter } from "@next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import NavBar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/main-banner";
import TransactionStep from "../components/organisms/transaction-step";
import FeaturedGame from "../components/organisms/featured-game";
import Reached from "../components/organisms/reached";
import Story from "../components/organisms/story";
import Footer from "../components/organisms/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
