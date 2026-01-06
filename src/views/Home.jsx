import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../index.css'
import FruitIMG from '../assets/fruit-bg.png'
import IconFresh from '../assets/features/fresh.png'
import IconVariety from '../assets/features/fruit.png'
import IconPrice from '../assets/features/affordable.png'
import IconDelivery from '../assets/features/delivery.png'
import FeatureCard from '../components/FeatureSection'
import { Key } from 'lucide-react'


const FEATURES_CONFIG = [
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

      <div className="top-0 min-h-screen px-6 bg-[#FFC4C4]">

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img src={FruitIMG} alt="fruits-bg" className="h-[400px] w-auto object-contain" />

          <h1 className="text-4xl text-40 md:text-[45px] text-center text-[#CD2C58] font-bold text-center max-w-lg ">
            Your one Best Shop for fresh and delicious fruits
          </h1>
        </div>

        <h2 className="text-2xl text-[#333] md:text-[28px] text-center mt-10 font-bold my-10">
          Why you should buy fruits from us?
        </h2>

      
      <div className="flex flex-col items-center md:flex-row justify-around">
        {FEATURES_CONFIG.map((feat, index) => {
          const { title, description, imgSrc } = feat;

          return (
            <FeatureCard 
            Key={index}
            title={title}
            description={description}
            imgSrc={imgSrc}
            />
          );
        })}
      </div>


      </div>

      <Footer />
    </div>
  )
}

export default Home
