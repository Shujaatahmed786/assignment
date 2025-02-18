import Navbar from "../navbar";

const Contact = () => {
  return (
    <div>
      <div className="bg-[url('/assets/images/main.svg')] bg-cover bg-center bg-no-repeat p-4 md:p-0">
      <div className="px-32 pt-12">
      <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center p-44">
       
          <h1 className="text-center text-[52px] text-white font-medium">Contact us</h1>
          <p className="text-white text-center">If you have any further questions or queries please do not hesitate to get in touch.</p>
          </div>
      </div>
      <h1 className="text-[38px] text-center font-bold mt-12 ">
        Get in Touch With Us
      </h1>


      <div className="flex justify-center gap-4 mb-12">
        <div>
          <h1 className="font-bold text-[30px]">Address</h1>
          <p>36 Richmond Road, Central London</p>
          <h1 className="font-bold text-[30px]">Email Address</h1>
          <p className="text-[#FAAC1D] hover:border-b">
            info@aceassignmenthub.co.uk
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="border rounded-[30px] outline-none px-4 py-4 border-[#2c4a6c]"
            />
            <input
              type="text"
              placeholder="Email *"
              className="border rounded-[30px] outline-none px-4 py-4 border-[#2c4a6c]"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="Number *"
              placeholder="Phone Number"
              className="border rounded-[30px] outline-none px-4 py-4 border-[#2c4a6c]"
            />
            <input
              type="Message"
              placeholder="message"
              className="border rounded-[30px] outline-none px-4 py-4 border-[#2c4a6c]"
            />
            <button className="bg-[#FAAC1D] text-lg font-bold shadow-[1px_1px_10px_rgb(7,71,168)] text-white px-2 py-4 rounded-[30px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
