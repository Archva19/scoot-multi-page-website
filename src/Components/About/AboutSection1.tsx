import InfoModel from "../Models/InfoModel";

export default function AboutSection1() {
  const aboutSection1Arr = [
    {
      id: 1,
      img: "About/digitalEra.webp",
      title: "Mobility for the digital era",
      desc: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
      mirroredStatus: true,
      arrowType: "leftUpwardBottom",
      btnStatus:false
    },
    {
      id: 2,
      img: "About/Urban.webp",
      title: "Better urban living",
      desc: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
      mirroredStatus: false,
      arrowType: "rightDownwardTop",
      btnStatus:false
    },
  ];
  return (
    <>
      <InfoModel arr={aboutSection1Arr} />
    </>
  );
}
