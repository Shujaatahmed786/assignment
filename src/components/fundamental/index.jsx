import { overview } from "@/data/overview";
const Fundamental = () => {
  return (
    <div>
      <div className="p-4 md:p-0">
        <h1 className="text-[29.06px] text-center font-semibold mt-12">
          Fundamental Of A Dissertation
        </h1>
        <h2 className="text-[#faac1d] text-2xl font-semibold text-center">
          A Brief Overview
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-32 mt-12">
        {overview.map((item, index) => (
          <div
            key={index}
            className="border-[3px] rounded-xl border-[#faac1d] p-8"
          >
            <h1 className="text-[#faac1d] text-[23.03px] font-semibold">
              {item.title}
            </h1>
            <p className="text-lg">{item.para}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#FAAC1D] text-white px-4 rounded-lg py-2">
          WhatsApp Now
        </button>
      </div>
    </div>
  );
};

export default Fundamental;
