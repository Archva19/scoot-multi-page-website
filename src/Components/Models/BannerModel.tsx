import type { CSSProperties } from "react";
import ThreeDots from "./ThreeDots";
import { motion } from "framer-motion";

interface BannerInfo {
  mobileBg: string;
  tabletBg: string;
  desktopBg: string;
  title: string;
}

interface BannerModelProps {
  info: BannerInfo;
}

export default function BannerModel({ info }: BannerModelProps) {
  return (
    <>
      <div
        className="overflow-hidden bg-(image:--bg-mobile) sm:bg-(image:--bg-tablet) lg:bg-(image:--bg-desktop) py-15 px-8 bg-cover bg-center bg-no-repeat flex items-center justify-center mb-18 relative md:mb-36 md:py-18 md:px-24.25 md:justify-start md:items-start lg:px-41.25 lg:mb-30"
        style={
          {
            "--bg-mobile": `url(/${info.mobileBg})`,
            "--bg-tablet": `url(/${info.tabletBg})`,
            "--bg-desktop": `url(/${info.desktopBg})`,
          } as CSSProperties
        }
      >
        <div className="bg-[#2F3B59] absolute h-full w-full top-0 right-0 left-0 opacity-75"></div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[40px] leading-10 font-bold tracking-[-1.79px] text-white z-10"
        >
          {info.title}
        </motion.p>
        <div className="hidden md:inline-block absolute -right-7.75 top-1/2 -translate-y-1/2">
          <ThreeDots />
        </div>
      </div>
    </>
  );
}
