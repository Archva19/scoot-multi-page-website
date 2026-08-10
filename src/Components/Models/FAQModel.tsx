import FAQItemModel from "./FAQItemModel";
import { motion } from "framer-motion";

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}

interface Question {
  id: number;
  title: string;
  questions: QuestionItem[];
}

interface FAQModelProps {
  questionsArr: Question[];
}

export default function FAQModel({ questionsArr }: FAQModelProps) {
  return (
    <>
      <div className="w-[82.9%] mx-auto  flex flex-col items-center justify-center gap-12 mb-30 md:w-[89.7%] lg:gap-16 lg:mb-40 lg:w-[77.08%]">
        <p className="title text-[#495567]">FAQs</p>
        <div className="flex flex-col items-center justify-center gap-12 text-center w-full md:gap-16">
          {questionsArr.map((questionsArrItem) => (
            <div
              key={questionsArrItem.id}
              className="flex flex-col items-center justify-center gap-8 w-full lg:flex-row lg:justify-between lg:items-start"
            >
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="subTitle md:text-[40px] md:leading-12 md:tracking-[-1.79px] text-[#495567]"
              >
                {questionsArrItem.title}
              </motion.p>
              <div className="flex flex-col gap-4 w-full md:gap-6 lg:max-w-182.5">
                {questionsArrItem.questions.map((item) => (
                  <FAQItemModel key={item.id} question={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
