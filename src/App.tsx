import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Careers from "./Components/Careers/Careers";
import Locations from "./Components/Locations/Locations";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Location" element={<Locations />} />
      </Routes>
      <Footer/>
    </>
  );
}
