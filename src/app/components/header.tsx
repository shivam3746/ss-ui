import Image from "next/image";
import { X } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between p-4 shadow-md h-12">
      {/* Logo on the left */}
      <Image src="/superstratum_logo.png" alt="Logo" width={30} height={20} />

      {/* Close button on the right */}
      <button className="p-2 rounded-full hover:bg-gray-200 transition">
        <X size={24} />
      </button>
    </header>
  );
};

export default Header;
