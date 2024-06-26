import Image from "next/image";

import ButtonComponent from "../common/ButtonComponent";
import RatingComponent from "../common/RatingComponent";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>

          <RatingComponent getApp />

          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <ButtonComponent
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              customStyle="w-full"
            />
            <ButtonComponent
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              customStyle="w-full"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
