import Image from "next/image";

import CampSiteComponent from "./CampSiteComponent";

const CampComponent = () => {
  return (
    <section className="2xl:max-container relative flex flex-col pb-10 lg:pt-5">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CampSiteComponent
            backgroundImage="bg-bg-img-1"
            title="Klipview Camp Site"
            subtitle="Camps Bay, Cape Town"
            peopleJoined="99+ Joined"
          />
          <CampSiteComponent
            backgroundImage="bg-bg-img-2"
            title="Kimberly Camp Site"
            subtitle="Kimberly Hole"
            peopleJoined="50+ Joined"
          />
        </div>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Disoriented</strong> and Unsure of Your Path?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Commencing with the nervousness experienced by climbers upon
            venturing to a new climbing spot, the likelihood of becoming
            disoriented is significant. Hence, we're here to assist those
            embarking on an adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default CampComponent;
