import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white p-4">
      <div className="flex flex-col md:flex-row text-center justify-between items-center space-y-4 px-32  md:py-6">
        <div>
          <div className="relative w-36 h-24">
            <Image
              src="./assets/icons/logo.svg"
              fill
              className="object-contain"
              alt="logo"
            />
          </div>
          <p className="max-w-[25rem] w-full">
            ACE ASSIGNMENT HUB provides the right services that are not crossing
            any University’s law. We are just helping students, and our papers
            must be used for reference. We are not permitting anyone to use our
            papers for business purposes.
          </p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <p>Home</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h1>Get In Touch</h1>
          <h2>info@aceassignmenthub.co.uk</h2>
          <h3>58 Naseby Road LU1 United Kingdom</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
