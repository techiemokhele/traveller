"use client";

import { useState } from "react";
import Image from "next/image";

import RatingComponent from "../common/RatingComponent";
import ButtonComponent from "../common/ButtonComponent";

const HeroComponent = () => {
  const [showLocation, setShowLocation] = useState(true);

  const handleLocation = () => {
    setShowLocation(!showLocation);
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-16 xl:flex-row">
      <div className="hero-map cursor-pointer" onClick={handleLocation} />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-28px] lg:top-[-34px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-64">Mokhele Travel Camp Area</h1>
        <p className="regular-16 text-gray-30 mt-6 xl:max-w-[520px]">
          We aim to accompany you on every journey, reveling in the pristine
          beauty of nature. Our app is designed to guide you on adventures
          across the globe, providing everything you need for an unforgettable
          experience.
        </p>

        <RatingComponent getApp={false} />

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <ButtonComponent
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <ButtonComponent
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Location card section */}
      {!showLocation && (
        <div className="relative flex flex-1 items-start lg:mt-16 mt-16" />
      )}

      {showLocation && (
        <div className="relative flex flex-1 items-start lg:mt-6">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image
                  src="/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                  onClick={handleLocation}
                  className="cursor-pointer"
                />
              </div>
              <p className="bold-20 text-white">Mountain Camp Site</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">54.28 km</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.5 km</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroComponent;
