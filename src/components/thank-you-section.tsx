"use client";

import { IoIosArrowUp } from "react-icons/io";

export function ThankYouSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-20 px-4 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          最後までご覧いただきありがとうございました
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Thank you
        </h2>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={scrollToTop}
            className="mt-8 px-6 py-3 bg-transparent text-primary  hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <IoIosArrowUp className="text-primary text-2xl" />
            Top
          </button>
        </div>
      </div>
    </section>
  );
}
