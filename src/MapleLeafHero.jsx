import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import backgroundImage from './assets/BGImage.jpg';
import logoImage from './assets/Logo.webp';
import Image01 from './assets/AboutFood01.jpg';
import MissionValuesSection from './MissionValuesSection';
import { useNavigate } from "react-router-dom";

export default function MapleLeafHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="bg-white/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 sm:h-20">
                {/* Logo */}
                <div className="flex items-center">
                  <img src={logoImage} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                  <a href="#" className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">
                    Home
                  </a>
                  <a href="#about-us" className="text-gray-700 hover:text-blue-700 transition font-medium">
                    About Us
                  </a>
                  {/* <a href="#" className="text-gray-700 hover:text-blue-700 transition font-medium">
                    Our Brands
                  </a> */}
                  <button
                    onClick={() => navigate("/apply-now")}
                    className="text-gray-700 hover:text-blue-700 transition font-medium"
                  >
                    Apply Now
                  </button>

                  <a href="#" className="text-red-600 hover:text-red-700 transition font-medium">
                    Check Status
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-gray-700 hover:text-blue-700 transition"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="lg:hidden pb-4 space-y-3">
                  <a href="#" className="block text-blue-700 font-semibold py-2 border-l-4 border-blue-700 pl-4">
                    Home
                  </a>
                  <a href="#about-us" className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4">
                    About Us
                  </a>
                  {/* <a href="#" className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4">
                    Our Brands
                  </a> */}
                  <a href="#" onClick={() => navigate("/apply-now")} className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4">
                    Apply Now
                  </a>
                  <a href="#" className="block text-red-600 hover:text-red-700 transition font-medium py-2 pl-4">
                    Check Status
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 md:pt-32 pb-12 sm:pb-20">
            <div className="max-w-2xl">
              <p className="text-blue-400 font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 tracking-wide">
                Discover Innovative Flavors
              </p>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                CA Work In<br />Canada - Apply<br />Now Through AG<br />Foods
              </h1>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition transform hover:scale-105 text-sm sm:text-base">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                Have questions about our products? Contact Now +15819001004
              </h2>
              <p className="text-sm sm:text-base text-blue-100">
                We Provide Free Visa | Ticket | Food
              </p>
            </div>
            <button className="bg-transparent hover:bg-white hover:text-blue-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition whitespace-nowrap">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about-us" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-gray-600 text-sm sm:text-base font-medium mb-3 tracking-wide uppercase">
                OUR HERITAGE IN FOOD EXCELLENCE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Your Partner in Food Innovation
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mb-3"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                AG Foods, founded in 2010, is a leading food agency based in New York. We excel in developing and marketing innovative food products, connecting brands with consumers through strategic insights and tailored solutions that resonate in today’s competitive market.
              </p>
              <br />
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Over the years, AG Foods has helped numerous clients achieve remarkable results, driving sales growth and enhancing brand visibility. Our dedicated team of experts collaborates closely with partners, ensuring their products not only meet but exceed market expectations
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={Image01}
                  alt="Maple Leaf Foods Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MissionValuesSection />
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/15819001004"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition transform hover:scale-110 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          className="sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}