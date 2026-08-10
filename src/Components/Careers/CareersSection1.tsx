import InfoModel from "../Models/InfoModel";

export default function CareersSection1() {
  const careersInfoArr = [
    {
      id: 1,
      img: "Careers/mission.webp",
      title: "Care to join our mission?",
      desc: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
      mirroredStatus: true,
      arrowType: "leftDownwardBottom",
      btnStatus:true
    },
  ];
  return (
    <>
      <InfoModel arr={careersInfoArr} />
    </>
  );
}
