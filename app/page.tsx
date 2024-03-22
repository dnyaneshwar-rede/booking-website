"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Map from "@/components/Footer/Map";
import Faq from "@/components/FAQ/Faq"
import ImageGallary from "@/components/ImageGallary";
import  Activity from "@/components/Activity";
import Video from "@/components/Video";

export default function Home() {
  return (
      <main>
        <Hero />
        <Video />
        <Activity />
        <About />
        <Packages/>
        <ImageGallary />
        <Faq />
        <Map />
      </main>
  );
}
