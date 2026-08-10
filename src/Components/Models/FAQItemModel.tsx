import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQItemModelProps {
  question: QuestionItem;
}

export default function FAQItemModel({ question }: FAQItemModelProps) {
  const [isOpen, setIsOpen] = useState(question.id === 1);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#F2F5F9] p-8 flex flex-col gap-6 text-[#495567] text-left w-full hover:bg-[#FFF4DF] cursor-pointer "
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-[18px] leading-6 font-bold tracking-[-0.8px] md:text-[24px] md:leading-7 md:tracking-[-1.07px]">
            {question.question}
          </p>
          <motion.button
            animate={{ rotate: isOpen ? -45 : 135 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`w-2.25 h-2.25 border-t-3 border-r-3 border-[#FCB72B]`}
          ></motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              transition={{ duration: 0.2, ease: easeInOut }}
              exit={{ opacity: 0, height: 0 }}
              className="descLexend"
            >
              {question.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
