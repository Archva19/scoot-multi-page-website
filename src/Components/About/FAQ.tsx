import FAQModel from "../Models/FAQModel";

export default function FAQ() {
  const questionsArr = [
    {
      id: 1,
      title: "How it works",
      questions: [
        {
          id: 1,
          question: "How do I download the app?",
          answer:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
        {
          id: 2,
          question: "Can I find a nearby Scoots?",
          answer:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
        {
          id: 3,
          question: "Do I need a license to ride?",
          answer:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
      ],
    },
    {
      id: 2,
      title: "Safe driving",
      questions: [
        {
          id: 1,
          question: "Should I wear a helmet?",
          answer:
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        },
        {
          id: 2,
          question: "How about the rules & regulations?",
          answer:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
        {
          id: 3,
          question: "What if I damage my Scoot?",
          answer:
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
        },
      ],
    },
  ];
  return <FAQModel questionsArr={questionsArr} />;
}
