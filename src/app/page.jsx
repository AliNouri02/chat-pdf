"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Download from "./components/Download";
import ContactUs from "./components/ContactUs";
import AboutUs from './components/AboutUs';

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("Promot");

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };

  return (
    <main className="">
      <Navbar />
      <Hero />
      
     <AboutUs/>

      <div className="px-2 md:py-20">
        <div className="flex justify-center text-app-purple font-bold text-center text-[24px] md:text-[64px]">
          <h2>Converse, Learn, Track</h2>
        </div>
        <div className="flex justify-center text-app-gray font-bold text-center text-[24px] md:text-[64px] my-2">
          <h2> All on Your Terms</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex my-12 rounded-full border-app-purple border p-1 text-[16px]">
            <a
              onClick={() => handleLinkClick("Promot")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Promot"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Promot
            </a>
            <a
              onClick={() => handleLinkClick("Edit")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Edit"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Edit
            </a>
            <a
              onClick={() => handleLinkClick("Write")}
              className={`cursor-pointer transition-colors rounded-full py-3 px-8 ${
                selectedLink === "Write"
                  ? "bg-app-purple text-white"
                  : " text-[#4C05B3]"
              }`}
            >
              Write
            </a>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <Image
            alt="Arrow"
            width={1038}
            height={614}
            quality={100}
            className=""
            src="/assets/Frame 1171276372.png"
          />
        </div>
      </div>

      <Features />
      <Plans />
      <Download />
      <ContactUs />
      <FAQ />
      <Footer />
    </main>
  );
}
