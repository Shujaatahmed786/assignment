const Refund = () => {
  return (
    <div>
      <div className="bg-[url('/assets/images/cta-bg-light.svg')] bg-cover bg-center bg-no-repeat p-4 py-14">
        <h1 className="text-[36px] font-bold text-center text-[#464646]">
          <span className="text-[#FAAC1D]">ACE ASSIGNMENT HUB</span> With 100%
          Refund Policy
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#FAAC1D] text-white font-bold text-[18px] px-4 py-4 border-4 border-[#FAAC1D] rounded-lg hover:bg-transparent hover:text-[#FAAC1D]">
            Grab 40% Discount
          </button>
          <button className="bg-[#FAAC1D] font-bold text-[18px] px-4 py-4 text-white border-4 border-[#FAAC1D] rounded-lg hover:bg-transparent hover:text-[#FAAC1D]">
            Whatsapp Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Refund;
