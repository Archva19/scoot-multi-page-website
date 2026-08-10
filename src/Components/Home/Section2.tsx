import InfoModel from "../Models/InfoModel";

export default function Section2() {
  const section2Arr = [
    {
      id: 1,
      img: "Home/App.webp",
      title: "Easy to use riding telemetry",
      desc: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
      mirroredStatus: true,
      arrowType: "leftDownwardBottom",
      btnStatus:true
    },
    {
      id: 2,
      img: "Home/City.webp",
      title: "Coming to a city near you",
      desc: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
      mirroredStatus: false,
      arrowType: "rightDownwardTop",
      btnStatus:true
    },
    {
      id: 3,
      img: "Home/Payment.webp",
      title: "Zero hassle payments",
      desc: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month..",
      mirroredStatus: true,
      arrowType: "leftDownwardTop",
      btnStatus:true
    },
  ];
  return (
    <>
      <InfoModel arr={section2Arr} />
    </>
  );
}
