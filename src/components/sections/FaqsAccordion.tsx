"use client";

import { useState } from "react";
import RichTextSection from "./RichTextSection";

export default function FaqsAccordion({ faqs }: { faqs: any[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-items my-8">
      {faqs?.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={faq?._id || index}
            className="faq-item border-b border-gray-200 py-4"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center text-left font-bold faq-item--title text-2xl cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq?.title}
              <span
                className={`ml-2 transition-transform duration-300 ease-in-out text-2xl ${isOpen ? "rotate-180" : "rotate-0"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none"><path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/></svg>
              </span>
            </button>
            <div
              className={`faq-item--content transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <RichTextSection section={faq} isContainer={false} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
