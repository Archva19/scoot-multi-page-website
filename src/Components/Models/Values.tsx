import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Values({ title }:{title:string}) {
  const valuesArr = [
    {
      id: 1,
      img: "Values/tech.webp",
      title: "Our tech",
      desc: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    },
    {
      id: 2,
      img: "Values/integrity.webp",
      title: "Our integrity",
      desc: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    },
    {
      id: 3,
      img: "Values/community.webp",
      title: "Our community",
      desc: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    },
  ];

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
      <div className="mb-36.25 w-[82.9%] mx-auto flex flex-col gap-16 items-center justify-center md:w-[59.5%] md:gap-26.25 xl:w-[77.08%]">
        <motion.p
          initial={
            isScrollingDown ? { y: 30, opacity: 0 } : { y: 0, opacity: 1 }
          }
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="title text-[#495567]"
        >
          {title}
        </motion.p>
        <div className="flex flex-col gap-14 xl:flex-row xl:gap-7.5">
          {valuesArr.map((item) => (
            <motion.div
              initial={
                isScrollingDown ? { y: 50, opacity: 0 } : { y: 0, opacity: 1 }
              }
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col gap-16 md:gap-21.75 xl:w-87.5"
              key={item.id}
            >
              <div className="relative flex items-center justify-center">
                <img src={item.img} alt="" />
                <div className="absolute -bottom-13.75 left-1/2 -translate-x-1/2 bg-[#FCB72B] flex items-center justify-center rounded-full w-24 h-24 subTitle">{`0${item.id}`}</div>
              </div>
              <div className="flex flex-col gap-6.75 text-center">
                <p className="subTitle text-[#495567]">{item.title}</p>
                <p className="descLexend text-[#939CAA]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
