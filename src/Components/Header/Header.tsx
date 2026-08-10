import { Link } from "react-router-dom";
import GetScootingBtn from "../Models/GetScootingBtn";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import Navigation from "../Models/Navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [sideNavVis, setSideNavVis] = useState(false);

  useEffect(() => {
    if (sideNavVis) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideNavVis]);

  return (
    <>
      <div className="bg-white w-full sticky z-100 top-0">
        <div className="w-[82.9%] min-h-16 mx-auto flex items-center justify-start gap-[31.6%] py-5.5 md:justify-between md:gap-0 md:w-[89.5%] lg:w-[76.8%]">
          <AnimatePresence mode="wait">
            {sideNavVis ? (
              <motion.button
                key="close-btn"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -180 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSideNavVis(false)}
                className="cursor-pointer"
              >
                <img src="Header/CloseIcon.svg" alt="" />
              </motion.button>
            ) : (
              <button
                key="sandwich-btn"
                onClick={() => setSideNavVis(true)}
                className="cursor-pointer md:hidden"
              >
                <img src="Header/Sandwich.svg" alt="" />
              </button>
            )}
          </AnimatePresence>
          <div className="flex items-center gap-[58.18px]">
            <Link to="/" className = "absolute left-1/2 -translate-x-1/2 md:inline-block md:static md:translate-x-0">
              <img
                className="w-[75.5px] md:w-[107.81714630126953px]"
                src="Logo/scoot.webp"
                alt=""
              />
            </Link>
            
            <div className="hidden md:flex">
              <Navigation />
            </div>
          </div>

          <div className="hidden md:inline-block">
            <GetScootingBtn />
          </div>
        </div>
      </div>
      <SideNav sideNavVis={sideNavVis} setSideNavVis={setSideNavVis} />
    </>
  );
}
