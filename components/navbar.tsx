import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">User</div>
    </div>
  );
};

export default Navbar;
