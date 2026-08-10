import BannerModel from "../Models/BannerModel";

export default function LocationBanner() {
  const LocationBannerInfo = {
    mobileBg: "Careers/CareersBannerMobile.webp",
    tabletBg: "Careers/CareersBannerTablet.webp",
    desktopBg: "Careers/CareersBannerDesktop.webp",
    title: "Locations",
  };
  return (
    <>
      <BannerModel info={LocationBannerInfo} />
    </>
  );
}
