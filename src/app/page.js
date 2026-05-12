// 'use client';
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/NavBar";
import ProjectsSection from "@/app/components/ProjectSection";
import Image from "next/image";
import EmailSection from "./components/EmailSection";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#151A28] overflow-x-hidden">

      <Navbar />
      <div className="container mx-auto px-4 sm:px-8 md:px-12 pt-28">

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <div className="h-64 md:h-80" /> {/* Increased spacing significantly */}
        <EmailSection />

      </div>
      <Footer />
    </main>

  );
}
