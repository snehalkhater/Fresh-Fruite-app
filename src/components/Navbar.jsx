import React from "react";
import { Cherry as CherryIcon } from "lucide-react";

function Navbar() {
  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2
      max-w-5xl w-full bg-[#F2EFE7]
      px-12 py-5 rounded-full
      flex items-center gap-3
      shadow-md shadow-red-200 z-50"
    >
      <CherryIcon className="w-8 h-8 text-red-500" />
      <h2 className="text-2xl font-bold text-gray-800">
        Fruitify
      </h2>
    </div>
  );
}

export default Navbar;
