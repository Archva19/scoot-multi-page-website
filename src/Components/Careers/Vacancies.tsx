import { motion } from "framer-motion";

export default function Vacancies() {
  const vacanciesArr = [
    {
      id: 1,
      position: "General Manager",
      location: "Jakarta, Indonesia",
    },
    {
      id: 2,
      position: "UI/UX Designer",
      location: "Yokohama, Japan",
    },
    {
      id: 3,
      position: "Blog Content Copywriter",
      location: "New York, United States",
    },
    {
      id: 4,
      position: "Graphic Designer",
      location: "New York, United States",
    },
    {
      id: 5,
      position: "Fleet Supervisor",
      location: "Jakarta, Indonesia",
    },
    {
      id: 6,
      position: "UX Analyst",
      location: "London, United Kingdom",
    },
  ];
  return (
    <>
      <div className="w-[82.9%] m-auto flex flex-col gap-4 mb-30 md:w-[89.7%] lg:w-[77.08%] lg:gap-6 lg:mb-40">
        {vacanciesArr.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: item.id % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={item.id}
            className="w-full flex flex-col gap-4 pt-9 px-8 pb-8 bg-[#F2F5F9] md:flex-row md:justify-between md:items-center"
          >
            <div className="flex flex-col gap-1 text-[#495567] text-center md:text-left">
              <p className="font-bold text-[18px] leading-6 tracking-[-0.8px] md:text-[24px] md:leading-7 md:tracking-[-1.07px]">
                {item.position}
              </p>
              <p className="descLexend">{item.location}</p>
            </div>
            <button className="w-full py-3.5 md:w-45 yellowBtn descMono">
              Apply
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}
