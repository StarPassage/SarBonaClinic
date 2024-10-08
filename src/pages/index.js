import Image from "next/image";
import { Inter } from "next/font/google";
import SubHeader from "@/components/SubHeader";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import AppointmentPopupForm from "../components/AppointmentPopupForm";
import { AppointmentFormProvider } from "../providers/AppointmentPopupFormContext";
import ServicesList from "@/components/ServicesList";
import HotDealsCarousel from "@/components/HotDealsCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppointmentFormProvider>
      <div>
        <SubHeader />
        <Header />
        <MainBanner />
        <ServicesList />
        <HotDealsCarousel />
        <ReviewsSection />
        <AppointmentPopupForm />
        <Footer />
      </div>
    </AppointmentFormProvider>
  );
}
