"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import HeroSection from "../heroSection";
import Services from "../services";
import Fundamental from "../fundamental";
import Hire from "../hire";
import Refund from "../refund";
import Working from "../working";
import Footer from "../footer";
import CopyRight from "../copyRight";
import ServiceCard from "../serviceCards";

const AboutUs = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[url('/assets/images/main.svg')] bg-cover bg-center bg-no-repeat p-4 md:p-0">
        <div className="flex flex-col w-full px-0 md:px-36">
          <div className="flex justify-between ">
            <div className="relative w-24 h-24 md:w-36 md:h-24">
              <Image
                src="./assets/icons/logo.svg"
                fill
                className="object-contain"
                alt="logo"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <button className="bg-[#FAAC1D] h-12 text-center text-white px-4 rounded-lg ">
                Our Reviews 4.7/5
              </button>
              <button className="bg-[#FAAC1D] h-12 text-white px-4 rounded-lg ">
                WhatsApp Now
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-lg py-4">
            <ul className="flex flex-col md:flex-row px-12 justify-start gap-14 font-bold ">
              <li className="cursor-pointer">Home</li>
              <li
                className="cursor-pointer"
                onClick={() => router.push("/aboutUs")}
              >
                About Us
              </li>
              <li className="cursor-pointer">Thesis Help</li>
              <li className="cursor-pointer">Dissertation Help</li>
              <li className="cursor-pointer">Services</li>
              <li
                className="cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 pb-10">
            <div
              className="flex flex-col gap-4 bg-white rounded-l-lg mt-4 px-12 py-6 w-full"
              // style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
            >
              <h1 className="text-[#FAAC1D] text-center text-[33px] font-bold">
                Get Instant Qoute
              </h1>
              <input
                type="text"
                placeholder="Full Name *"
                className="border-blue-600 border w-full py-2 rounded-lg px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Email *"
                className="border-blue-600 border w-full py-2 rounded-lg px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="border-blue-600 border w-full py-2 rounded-lg px-2 outline-none"
              />
              <button className="bg-[#FAAC1D] h-12 w-full text-center text-white px-4 rounded-lg ">
                Submit
              </button>
            </div>
            <div>
              <ServiceCard
                title="Hire British Experts"
                subtitle="Thesis help online"
                description="Conquer Your Thesis with Expert UK Support!"
                buttonText="Whatsapp Now"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroSection />
        <Fundamental />
        <Hire />
        <Working />
        <Refund />
        <Services />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default AboutUs;
