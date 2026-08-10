import GetScootingBtn from "../Models/GetScootingBtn";
import RightArrow from "../Models/RightArrow";
import ThreeDots from "../Models/ThreeDots";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      <div className="overflow-hidden relative bg-[url('Home/HomeBannerMobile.webp')] sm:bg-[url('Home/HomeBannerTablet.webp')] lg:bg-[url('Home/HomeBannerDesktop.webp')] bg-cover bg-center bg-no-repeat pt-28.75 pb-44.75 px-8 md:pt-35.25 md:pb-54.25 md:px-24.5 lg:pl-41.25 lg:pr-0 lg:pt-38.25 lg:pb-38">
        <div className="flex flex-col text-center text-[white] items-center justify-center lg:text-left lg:items-start">
          <motion.p
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-bold tracking-[-1.79px] leading-10 text-[40px] mb-6 lg:mb-10 lg:max-w-125 md:text-[56px] md:leading-14"
          >
            Scooter sharing made simple
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x:-200 }}
            animate={{ opacity: 1, x:0 }}
            transition={{ duration: 0.6 }}
            className="descLexend mb-8.5 lg:max-w-101.25 min-[1440px]:ml-23.75"
          >
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-[1440px]:ml-23.75"
          >
            <GetScootingBtn />
          </motion.div>
          <div className="hidden min-[1440px]:inline-block absolute bottom-[45.5px] -right-7.75 min-[1440px]:bottom-[164.5px]">
            <ThreeDots />
          </div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden min-[1440px]:inline-block absolute bottom-9.75 -left-31.75 min-[1440px]:bottom-39.25 min-[1440px]:left-auto min-[1440px]:right-72"
          >
            <RightArrow />
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden bg-[#FCB72B] w-50.75 h-3 absolute left-0 bottom-73.75 min-[1440px]:inline-block"
          ></motion.div>
        </div>
      </div>
    </>
  );
}
