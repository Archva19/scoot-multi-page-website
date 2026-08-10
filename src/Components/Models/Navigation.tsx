import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <>
      <nav className="flex flex-col gap-4 items-center md:flex-row md:gap-8">
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.1 }}>
          <Link
            className="descMono text-[#939CAA] cursor-pointer hover:text-[#FCB72B]"
            to="/About"
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.1 }}>
          <Link
            className="descMono text-[#939CAA] cursor-pointer hover:text-[#FCB72B]"
            to="/Location"
          >
            Location
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.1 }}>
          <Link
            className="descMono text-[#939CAA] cursor-pointer hover:text-[#FCB72B]"
            to="/Careers"
          >
            Careers
          </Link>
        </motion.div>
      </nav>
    </>
  );
}
