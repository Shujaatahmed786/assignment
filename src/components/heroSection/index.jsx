import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center xl:flex-row mt-16 gap-4 px-4 md:px-36">
      <div className=" leading-[43px] text-center md:text-start ">
        <h1 className="text-[30px] font-bold">Get Professional</h1>
        <h1 className="text-[30px] md:text-[51px] font-bold text-[#faac1d]">
          Dissertation Help
        </h1>
        <h1 className="text-[30px] font-bold">
          To Ease Your Academic Struggle.
        </h1>
        <p className=" w-full md:w-[36rem] mt-4 text-lg">
          Feeling overwhelmed by your dissertation or thesis? Do not go it
          alone! Our team of UK Thesis Helpers provides affordable and
          high-quality assistance throughout your academic journey.
        </p>
        <p className="  w-full md:w-[38rem] mt-10 text-lg">
          Stuck on your research proposal? We will help you craft a compelling
          topic aligned with your interests. Need a hand with your literature
          review? We will guide you in finding relevant sources and summarising
          key findings. Struggling to write a clear and concise thesis
          statement? Our experts can offer invaluable thesis writing assistance.
        </p>
        <p className="text-lg mt-10">
          <span className="text-2xl font-bold">We do not stop there!</span>
          <br /> Our comprehensive services include dissertation assistance for
          all stages, from structuring your arguments to analysing data. Worried
          about grammar and clarity? We provide meticulous thesis proofreading
          and editing to ensure your work shines.
        </p>
        <p className="text-lg mt-10">
          Master's Thesis students, we understand your unique challenges. Let us
          empower you to write a thesis that meets the highest academic
          standards. Get the help you deserve! Our affordable services are
          designed to fit your budget, ensuring you have the support you need to
          succeed. Do not wait - get started on your research paper thesis
          today!
        </p>
        <div className="flex justify-center mt-10">
          <button className="bg-[#FAAC1D]  text-white px-4 rounded-lg ">
            WhatsApp Now
          </button>
        </div>
      </div>
      <div>
        <div className="relative w-24 h-24  md:w-[35rem] md:h-[55rem] ">
          <Image
            src="/assets/images/first-img.svg"
            fill
            alt="image"
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
