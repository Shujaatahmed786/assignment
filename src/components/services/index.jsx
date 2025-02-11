import { service } from "@/data/services";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-[#faac1d] py-16 mt-16">
      <h1 className="text-[32px] text-white text-center font-bold ">
        Reason To Choose Us For Your Dissertation
      </h1>
      <h2 className="text-center text-white text-[17px]">
        Our expert assistance with top-notch quality standard and affordability
        on every service.
      </h2>
      <div className="flex justify-center items-center text-center gap-12 mt-12">
        {service.map((item, index) => (
          <div key={index} className="bg-white px-12 py-12">
            <div className="relative w-24 h-24  mb-4 mt-8">
              <Image src={item.img} fill className="object-center" alt="icon" />
            </div>
            <h3 className="text-[19px] font-bold">{item.ratio}</h3>
            <h3 className="text-[17px] text-[#383838] font-medium">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
