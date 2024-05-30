import CampComponent from "@/components/section/CampComponent";
import FeaturesComponent from "@/components/section/FeaturesComponent";
import GetAppComponent from "@/components/section/GetAppComponent";
import GuideComponent from "@/components/section/GuideComponent";
import HeroComponent from "@/components/section/HeroComponent";

export default function Home() {
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
