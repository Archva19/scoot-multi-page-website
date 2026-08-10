import { motion } from "framer-motion";

export default function Map() {
  const cities = [
    { id: 1, city: "New York" },
    { id: 2, city: "London" },
    { id: 3, city: "Jakarta" },
    { id: 4, city: "Yokohama" },
  ];
  return (
    <div className="flex flex-col gap-10 w-[82.9%] m-auto mb-18 md:w-[89.7%] lg:w-[77.08%] md:mb-16 lg:mb-30">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full md:hidden"
        src="Location/mapMobile.webp"
        alt=""
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden w-full md:inline-block"
        src="Location/mapResponsive.webp"
        alt=""
      />
      <div className="flex flex-col gap-4 md:hidden">
        {cities.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: item.id % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full bg-[#FCB72B26]/85 py-5.5 text-[24px] leading-7 tracking-[-1.07px] font-bold text-center"
            key = {item.id}
          >
            {item.city}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
