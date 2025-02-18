import { list } from "@/data/list";

const ServiceCard = ({ title, subtitle, description, buttonText }) => {
  return (
    <div className="bg-white rounded-r-lg mt-4 px-12 py-6 w-full">
      <h4 className="text-[20px] tracking-[1px] font-semibold">{title}</h4>
      <h1 className="text-[#FAAC1D] text-[30px] md:text-[45px] font-extrabold">
        {subtitle}
      </h1>
      <p className="text-[17px] md:text-[27px] font-extrabold capitalize">
        {description}
      </p>
      <div className="flex justify-center">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-black w-full md:w-[48rem]">
          {list.map((text, index) => (
            <div key={index} className="text-black font-semibold">
              {text}
            </div>
          ))}
        </div>
      </div>
      <button className="bg-[#FAAC1D] text-sm md:text-base text-white mt-16 rounded-lg px-4 py-2 md:px-24">
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
