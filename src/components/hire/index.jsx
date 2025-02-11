const Hire = () => {
  return (
    <div className="mt-12">
      <div className="bg-[url('/assets/images/cta-bg.svg')] bg-cover bg-center bg-no-repeat py-14">
        <h1 className="text-[35px] text-center text-white font-semibold">
          Hire PhD Experts To Do My Dissertation
        </h1>
        <div className="flex justify-center px-32">
          <input
            type="text"
            className="border-2 px-4 py-2 rounded-l-[30px] w-full outline-none "
            placeholder="Full Name"
          />
          <input
            type="text"
            className="border-2 px-4 py-2 w-full outline-none"
            placeholder="Email"
          />
          <input
            type="number"
            className="border-2 px-4 py-2 w-full outline-none"
            placeholder="Number"
          />
          <button className="bg-black px-14 py-2 rounded-r-[30px] w-full  text-white outline-none">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
