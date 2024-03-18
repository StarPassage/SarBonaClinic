import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <MainBanner />
    </div>
  );
}
