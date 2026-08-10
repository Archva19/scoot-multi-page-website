import {motion} from "framer-motion"

export default function Section1() {
  const section1Arr = [
    {
      id: 1,
      icon: "Home/Mobile.svg",
      title: "Locate with app",
      desc: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
    },
    {
      id: 2,
      icon: "Home/Scooter.svg",
      title: "Pick your scooter",
      desc: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    },
    {
      id: 3,
      icon: "Home/Ride.svg",
      title: "Enjoy the ride",
      desc: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    },
  ];
  return (
    <>
      <motion.div 
      initial={{y:100, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8, ease:"easeInOut"}}
      className="my-30 w-[82.9%] m-auto flex flex-col gap-12 md:gap-10 md:w-143.25 md:mt-30.5 md:mb-36.25 relative xl:w-[77.08%] xl:gap-7.5 xl:justify-between xl:flex-row">
        {section1Arr.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 items-center md:flex-row md:gap-0 md:justify-between z-10 xl:flex-col xl:items-start xl:gap-10"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-[#FCB72B] rounded-full md:w-24 md:h-24">
              <img className="md:w-10 h-auto" src={item.icon} alt="" />
            </div>
            <div className="flex flex-col text-center gap-6 md:w-99.5 md:text-left md:gap-6.75 xl:w-87.5">
              <p className="font-bold text-[20px] leading-7 tracking-[-0.89px] text-[#495567] xl:text-[24px]">
                {item.title}
              </p>
              <p className="descLexend text-[#939CAA]">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="hidden md:inline-block absolute bg-[#E5ECF4] h-128.25 w-3 -top-30.5 left-10 xl:h-3 xl:w-[87.74%] xl:min-w-243.5 xl:top-10 xl:left-[-14.86%]"></div>
      </motion.div>
    </>
  );
}
