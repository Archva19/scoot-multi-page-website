import BannerModel from "../Models/BannerModel";

export default function AboutBanner() {
  const AboutBannerInfo = {
    mobileBg: "About/AboutBannerMobile.webp",
    tabletBg: "About/AboutBannerTablet.webp",
    desktopBg: "About/AboutBannerDesktop.webp",
    title: "About",
  };
  return (
    <>
      <BannerModel info={AboutBannerInfo} />
    </>
  );
}
