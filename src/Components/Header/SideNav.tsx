import { Link } from "react-router-dom";
import GetScootingBtn from "../Models/GetScootingBtn";
import { AnimatePresence, motion } from "framer-motion";

interface SideNavProps{
    sideNavVis:boolean,
    setSideNavVis: (value:boolean) => void;
}

export default function SideNav({ sideNavVis, setSideNavVis }:SideNavProps) {
  return (
    <>
      <AnimatePresence>
        {sideNavVis && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSideNavVis(false)}
            className="fixed h-screen w-screen bg-[black]/75 top-0 bottom-0 left-0 z-50"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#333A44] px-8 pt-32 pb-6 flex flex-col justify-between w-[68.26%] h-full"
            >
              <nav className="flex flex-col gap-6">
                <Link
                  onClick={() => setSideNavVis(false)}
                  to="/About"
                  className="text-[white] font-bold text-[18px] leading-6.25"
                >
                  About
                </Link>
                <Link
                  onClick={() => setSideNavVis(false)}
                  to="/Location"
                  className="text-[white] font-bold text-[18px] leading-6.25"
                >
                  Location
                </Link>
                <Link
                  onClick={() => setSideNavVis(false)}
                  to="/Careers"
                  className="text-[white] font-bold text-[18px] leading-6.25"
                >
                  Careers
                </Link>
              </nav>
              <GetScootingBtn />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
