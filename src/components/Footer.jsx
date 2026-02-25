import React from "react";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Cherry,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#F2EFE7] mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Cherry className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-800">
              Fruitify
            </h2>
          </div>

          <p className="text-sm">
            Fresh fruits delivered straight from farms to your doorstep.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> contact@fruitify.com
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Pune, Maharashtra, India
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-red-100 transition"
            >
              <Youtube className="text-red-600" />
            </a>

            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-pink-100 transition"
            >
              <Instagram className="text-pink-600" />
            </a>

            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-blue-100 transition"
            >
              <Twitter className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 pb-4">
        © Fruitify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;