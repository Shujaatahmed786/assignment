"use client";
import { useRouter } from "next/navigation";
import { links } from "@/data/links";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg py-4">
      <ul className="flex flex-col md:flex-row px-12 justify-start gap-14 font-bold">
        {links.map((link, index) => (
          <li
            key={index}
            className="cursor-pointer"
            onClick={() => link.path && router.push(link.path)}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;