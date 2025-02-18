const Hire = () => {
  return (
    <div className="mt-12">
      <div className="bg-[url('/assets/images/cta-bg.svg')] bg-cover bg-center bg-no-repeat py-14">
        <h1 className="text-[20px] md:text-[35px] mb-4 text-center text-white font-semibold">
          Hire PhD Experts To Do My Dissertation
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 px-4 md:px-32">
          <input
            type="text"
            className="border-2 px-4 py-2 md:rounded-l-[30px] w-full outline-none "
            placeholder="Full Name"
          />
          <input
            type="text"
            className="border-2 px-4 py-2  w-full outline-none"
            placeholder="Email"
          />
          <input
            type="number"
            className="border-2 px-4 py-2  w-full outline-none"
            placeholder="Number"
          />
          <button className="bg-black px-14 py-2  md:rounded-r-[30px] w-full  text-white outline-none">
            Hire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
