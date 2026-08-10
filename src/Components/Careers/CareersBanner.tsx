
import BannerModel from "../Models/BannerModel";

export default function CareersBanner() {
    const CareersBannerInfo = {
    mobileBg: "Careers/CareersBannerMobile.webp",
    tabletBg: "Careers/CareersBannerTablet.webp",
    desktopBg: "Careers/CareersBannerDesktop.webp",
    title: "Careers",
  };
  return (
   <>
      <BannerModel info={CareersBannerInfo} />
    </>
  )
}
