"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { list } from "@/data/list";
import HeroSection from "../heroSection";
import Services from "../services";
import Fundamental from "../fundamental";
import Hire from "../hire";
import Refund from "../refund";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[url('/assets/images/main.svg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col px-36">
          <div className="flex justify-between ">
            <div className="relative w-36 h-24">
              <Image
                src="./assets/icons/logo.svg"
                fill
                className="object-contain"
                alt="logo"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-[#FAAC1D] h-12 text-center text-white px-4 rounded-lg ">
                Our Reviews 4.7/5
              </button>
              <button className="bg-[#FAAC1D] h-12 text-white px-4 rounded-lg ">
                WhatsApp Now
              </button>
            </div>
          </div>
          <div className="flex bg-white rounded-lg py-4">
            <ul className="flex px-12 justify-start gap-14 font-bold ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
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
          <div className="flex gap-2 pb-10">
            <div
              className="flex flex-col gap-4 bg-white rounded-l-lg mt-4 px-12 py-6 w-[44rem]"
              style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
            >
              <h1 className="text-[#FAAC1D] text-center text-[33px] font-bold">
                Get Instant Qoute
              </h1>
              <input
                type="text"
                placeholder="Full Name *"
                className="border-blue-600 border py-2 rounded-lg px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Email *"
                className="border-blue-600 border py-2 rounded-lg px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="border-blue-600 border py-2 rounded-lg px-2 outline-none"
              />
              <button className="bg-[#FAAC1D] h-12 text-center text-white px-4 rounded-lg ">
                Submit
              </button>
            </div>
            <div
              className="bg-white rounded-r-lg mt-4 px-12 py-6 w-full "
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }}
            >
              <h4 className="text-[20px] tracking-[1px] font-semibold">
                Hire British Experts
              </h4>
              <h1 className="text-[#FAAC1D] text-[45px] font-extrabold">
                Thesis Help Online
              </h1>
              <p className="text-[27px] font-extrabold capitalize">
                Conquer Your Thesis with Expert UK Support!
              </p>
              <div className="flex justify-center">
                <div className="mt-4 grid grid-cols-2 gap-2 text-black max-w-[48rem] w-full">
                  {list.map((text, index) => (
                    <div key={index} className="text-black font-semibold">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <button className="bg-[#FAAC1D] h-12 text-white mt-16 rounded-lg px-24">
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroSection />
        <Services />
        <Fundamental />
        <Hire />
        <Refund />
      </div>
    </div>
  );
};

export default Home;
