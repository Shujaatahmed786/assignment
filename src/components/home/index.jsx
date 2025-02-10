import Image from "next/image";
import { list } from "@/data/list";

const Home = () => {
  return (
    <div className="bg-[url('/assets/images/main.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col px-96">
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
        <div className="flex  bg-white rounded-lg py-4">
          <ul className="flex px-12 justify-start gap-14 font-bold ">
            <li>Home</li>
            <li>About Us</li>
            <li>Thesis Help</li>
            <li>Dissertation Help</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-2 pb-16">
          <div className="flex flex-col gap-4 bg-white rounded-lg mt-4 px-12 py-6 w-[32rem]">
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
          <div className="bg-white rounded-lg mt-4 px-12 py-6 w-full ">
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
  );
};

export default Home;
