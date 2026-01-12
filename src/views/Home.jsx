import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

import FruitIMG from "../assets/fruit-bg.png";
import IconFresh from "../assets/features/fresh.png";
import IconVariety from "../assets/features/fruit.png";
import IconPrice from "../assets/features/affordable.png";
import IconDelivery from "../assets/features/delivery.png";

import FeatureCard from "../components/FeatureSection";

const FEATURES_CONFIG = [
  {
    title: "Freshness Guaranteed",
    description:
      "We source our fruits directly from local farms to ensure the highest quality and freshness.",
    imgSrc: IconFresh,
  },
  {
    title: "Wide Variety",
    description:
      "From tropical delights to seasonal favorites, we offer a diverse selection to satisfy every palate.",
    imgSrc: IconVariety,
  },
  {
    title: "Affordable Prices",
    description:
      "Enjoy premium fruits without breaking the bank, thanks to our competitive pricing.",
    imgSrc: IconPrice,
  },
  {
    title: "Convenient Delivery",
    description:
      "Get your favorite fruits delivered straight to your doorstep with our reliable delivery service.",
    imgSrc: IconDelivery,
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow bg-[#FFC4C4] px-6 py-16">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <img
              src={FruitIMG}
              alt="Fresh Fruits"
              className="h-[400px] w-auto object-contain"
            />

            <h1 className="text-4xl md:text-[45px] text-[#CD2C58] font-bold text-center max-w-lg">
              Your One Best Shop for Fresh and Delicious Fruits
            </h1>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl md:text-[28px] text-[#333] text-center font-bold mt-16 mb-10">
            Why should you buy fruits from us?
          </h2>

          {/* Features */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
            {FEATURES_CONFIG.map((feat, index) => (
              <FeatureCard
                key={index}
                title={feat.title}
                description={feat.description}
                imgSrc={feat.imgSrc}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
