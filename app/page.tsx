"use client";

import { useEffect } from "react";

import CampComponent from "@/components/section/CampComponent";
import FeaturesComponent from "@/components/section/FeaturesComponent";
import GetAppComponent from "@/components/section/GetAppComponent";
import GuideComponent from "@/components/section/GuideComponent";
import HeroComponent from "@/components/section/HeroComponent";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <HeroComponent />
      <CampComponent />
      <GuideComponent />
      <FeaturesComponent />
      <GetAppComponent />
    </>
  );
}
