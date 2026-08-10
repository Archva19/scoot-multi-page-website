import { useState } from "react";
import LeftDownwardArrow from "./LeftDownwardArrow";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface InfoItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  mirroredStatus: boolean;
  arrowType: string;
  btnStatus: boolean;
}

interface InfoModelProps {
  arr: InfoItem[];
}

export default function InfoModel({ arr }: InfoModelProps) {
  const { scrollY } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < previous) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
  });
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="mb-30 flex flex-col gap-30 w-[82.9%] m-auto md:w-[74.6%] lg:w-[77.98%]">
          {arr.map((item) => (
            <motion.div
              initial={
                isScrollingDown ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }
              }
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={item.id}
              className="flex flex-col items-center gap-14 lg:flex-row lg:justify-between"
            >
              <div
                className={`relative ${item.mirroredStatus && "lg:order-1"}`}
              >
                <img
                  className="md:w-111.25 rounded-full"
                  src={item.img}
                  alt=""
                />
                {item.arrowType === "leftDownwardBottom" && (
                  <div className="absolute w-183.5 top-43.25 -right-98 md:top-76.75 md:-right-41.25">
                    {" "}
                    <LeftDownwardArrow />
                  </div>
                )}
                {item.arrowType === "rightDownwardTop" && (
                  <div className="-scale-x-100 absolute top-0 -left-126.25 md:-left-137.5">
                    <LeftDownwardArrow />
                  </div>
                )}
                {item.arrowType === "leftDownwardTop" && (
                  <div className="absolute -right-138.5 top-0 md:-right-136.25 md:top-21.25">
                    <LeftDownwardArrow />
                  </div>
                )}
                {item.arrowType === "leftUpwardBottom" && (
                  <div className="-scale-y-100 absolute w-183.5 top-33.25 -right-106 md:top-76.75 md:-right-41.25">
                    {" "}
                    <LeftDownwardArrow />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-8 text-center items-center md:gap-10 lg:w-111.25 lg:text-left lg:items-start">
                <p className="font-bold title text-[#495567]">{item.title}</p>
                <p className="descLexend text-[#939CAA]">{item.desc}</p>
                {item.btnStatus && (
                  <button className="py-3.5 px-[43.5px] yellowBtn descMono">
                    Learn More
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
