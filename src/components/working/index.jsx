import { working } from "@/data/working";
import Image from "next/image";
const Working = () => {
  return (
    <div className="px-4 md:px-32 mt-12">
      <div className="flex flex-col md:flex-row justify-center">
        <h1 className="text-[31px] max-w-[34rem] w-full text-center font-bold">
          We work with you until you are
          <span className="text-[rgb(250,172,29)]">100% satisfied</span> with
          the quality!
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <h2 className="text-center  text-lg text-[#4c4c4c]">
          The quality of English in all documents edited by ACE ASSIGNMENT HUB
          will meet the standards required in the international publishing
          industry. This guarantee covers every document edited by us,
          regardless of the service level chosen, deadline, or price.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {working.map((items, index) => (
            <div key={index}>
              <h1 className="text-lg text-[#121212] font-bold md:max-w-44 w-full">
                {items.id}
              </h1>
            </div>
          ))}
        </div>
        <div className="relative max-w-[30rem] w-full min-h-[20rem]">
          <Image
            src="/assets/images/img-2.svg"
            fill
            alt="image"
            className="object-fit rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Working;
