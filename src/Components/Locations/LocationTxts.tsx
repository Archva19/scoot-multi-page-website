import { motion } from "framer-motion";

export default function LocationTxts() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col w-[82.9%] m-auto md:w-[74.6%] lg:w-[77.08%] text-[#495567] text-center gap-8 items-center mb-18 md:mb-30 min-[1440px]:flex-row min-[1440px]:text-left min-[1440px]:justify-between"
      >
        <div className="flex flex-col gap-8 items-center min-[1440px]:flex-row min-[1440px]:gap-7.5">
          <p className="title min-[1440px]:w-87.75">Your City Not Listed?</p>
          <p className="descLexend min-[1440px]:w-111.25">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
        </div>
        <button className="yellowBtn w-45 py-3.5 descMono">Message Us</button>
      </motion.div>
    </>
  );
}
