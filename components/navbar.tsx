import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 shadow sticky z-[41] top-0 bg-white">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <div className="w-10 h-10 bg-black rounded-full flex items-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
