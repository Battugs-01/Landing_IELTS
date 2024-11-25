import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_QUESTIONS } from "@/lib/config";
import { FC } from "react";
export const FaqSection: FC = () => {
  return (
    <section className="container py-20 flex flex-col items-center gap-8">
      <h1 className="text-5xl font-bold">FAQ</h1>
      <p className="text-xl">
        List of the most common questions about a premium Alpha Moodle theme.
      </p>
      <div className="flex flex-col items-stretch w-full mx-32 gap-4">
        {/* {FAQ_QUESTIONS.map((question, index) => (
          <div
            className="flex justify-between p-4 bg-gray-100 rounded-3xl group hover:bg-gray-300 duration-200 ease-in-out"
            key={index}
          >
            <span className="text-lg font-bold">{question.question}</span>
            <img
              src="/images/arrow.svg"
              className="-rotate-90 duration-200 ease-in-out group-hover:rotate-0"
            />
          </div>
        ))} */}
        <Accordion type="single" collapsible className="space-y-8">
          {FAQ_QUESTIONS.map((faq, index) => (
            <div
              key={faq.question}
              className="flex justify-between px-4 py-2 bg-gray-100 rounded-3xl group hover:bg-gray-300 duration-200 ease-in-out"
            >
              <AccordionItem value={faq.question} className="flex-1">
                <AccordionTrigger className="text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-medium ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
