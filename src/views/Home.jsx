import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../index.css'
import FruitIMG from '../assets/fruit-bg.png'
import IconFresh from '../assets/features/fresh.png'
import IconVariety from '../assets/features/fruit.png'
import IconPrice from '../assets/features/affordable.png'
import IconDelivery from '../assets/features/delivery.png'

const feature_config = [
  {
    title: "Freshness Guaranteed",
    description: "We source our fruits directly from local farms to ensure the highest quality and freshness.",
    imgSrc: IconFresh,
  },
  {
    title: "Wide Variety",
    description: "From tropical delights to seasonal favorites, we offer a diverse selection to satisfy every palate.",
    imgSrc: IconVariety,
  },
  {
    title: "Affordable Prices",
    description: "Enjoy premium fruits without breaking the bank, thanks to our competitive pricing.",
    imgSrc: IconPrice,
  },
  {
    title: "Convenient Delivery",
    description: "Get your favorite fruits delivered straight to your doorstep with our reliable delivery service.",
    imgSrc: IconDelivery,
  }
];

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen px-6">

        {/* Hero Section */}
        <div className="flex items-center justify-center gap-10">
          <img src={FruitIMG} alt="fruits-bg" className="h-[400px]" />

          <h1 className="text-4xl text-[#CD2C58] font-bold text-center max-w-lg">
            Your one-stop shop for fresh and delicious fruits
          </h1>
        </div>

        {/* Features Title */}
        <h2 className="text-2xl text-[#333] text-center mt-10 font-bold">
          Why you should buy fruits from us?
        </h2>

        {/* Features Section */}
        <div className="flex justify-around flex-wrap gap-6 mt-10">
          {feature_config.map((feat, index) => (
            <div
              key={index}
              className="bg-white px-4 py-6 w-64 text-center rounded-lg shadow"
            >
              <img
                src={feat.imgSrc}
                alt={feat.title}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-lg font-bold mt-4">{feat.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home
