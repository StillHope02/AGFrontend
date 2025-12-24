import React, { useState } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './assets/AGBackground.jpg';
import logoImage from './assets/Logo.webp';
import Image01 from './assets/AboutFood01.jpg';
import MissionValuesSection from './MissionValuesSection';
import { useNavigate } from "react-router-dom";
import JobsSection from './JobsSection';
import { Menu, X, CheckCircle, Users, Shield, TrendingUp, HeadphonesIcon, Cpu, FileText, Video, Plane, Home } from 'lucide-react';

export default function MapleLeafHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen relative font-sans">

      {/* Hero Section */}
      <div className="relative w-full">
        <img src={backgroundImage} alt="AG Foods Background" className="w-full h-100 object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Navigation */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="absolute inset-x-0 top-0 z-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              {/* Logo */}
              <motion.div variants={fadeInUp} className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
                <img src={logoImage} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              </motion.div>

              {/* Desktop Menu */}
              <motion.div variants={fadeInUp} className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-green-800 font-semibold border-b-2 border-green-800 pb-1">Home</a>
                <a href="#about-us" className="text-gray-800 hover:text-green-700 transition font-medium">About Us</a>
                <a href="#" onClick={() => navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</a>
                <button onClick={() => navigate("/apply-now")} className="text-gray-800 hover:text-green-700 transition font-medium">Apply Now</button>
                <a href="#" onClick={() => navigate("/status")} className="text-red-600 hover:text-red-700 transition font-medium">Check Status</a>
              </motion.div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden bg-white rounded p-1 text-gray-800 hover:text-green-700 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="lg:hidden pb-4 space-y-3 bg-white"
              >
                <a href="#" className="block text-green-800 font-semibold py-2 border-l-4 border-green-800 pl-4">Home</a>
                <a href="#about-us" className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">About Us</a>
                <a href="#" onClick={() => navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</a>
                {/* <a href="#jobs" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">AG Foods Canada Jobs</a> */}
                <a href="#" onClick={() => navigate("/apply-now")} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">Apply Now</a>
                <a href="#" onClick={() => navigate("/status")} className="block text-red-600 hover:text-red-700 transition font-medium py-2 pl-4">Check Status</a>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '24px' }}
          className="absolute inset-0 z-10 flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40"
        >
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-green-400 font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 tracking-wide">
            {/* Fresh & Sustainable Food Solutions */}
          </motion.p>
          <motion.h3 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-white text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8">
            {/* Grow Your Business<br />With AG Foods<br />Excellence */}
            AG Foods is a trusted name in the industry, Providing Visa Sponsorship jobs in Canada for International Workers
            {/* Food Packing Jobs in Canada with Visa Sponsorship 2025 - 2026 (AG FOODS) */}
          </motion.h3>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition text-sm sm:text-base"
          >
            Learn More
          </motion.button> */}
        </motion.div>
      </div>

      {/* Call-to-Action Banner */}
      {/* Job Selection Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20 sm:py-24"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose the Right Job for Your Future in Canada
            </h2>

            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>

            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Select from verified AG Foods Canada jobs with visa support,
              legal documentation, and full relocation assistance.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/jobs")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-full text-lg transition shadow-xl"
            >
              Select Your Job
            </motion.button>
          </div>

          {/* Right Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "Food Packing Jobs",
              "Factory Helper",
              "Warehouse Staff",
              "Drivers & Operators"
            ].map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-yellow-400 mb-3" />
                <p className="font-semibold text-lg">{job}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-green-700 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Questions about our products? Call Now +1 581-900-1004
            </h2>
            <p className="text-sm sm:text-base text-green-100">We Provide Free Visa | Ticket | Food</p>
          </div>
          <motion.button  onClick={() => navigate("/apply-now")} whileHover={{ scale: 1.05 }} className="bg-transparent hover:bg-white hover:text-green-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition whitespace-nowrap">
            Apply Now
          </motion.button>
        </div>
      </motion.div> */}

      {/* About Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} id="about-us" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-green-700 text-sm sm:text-base font-medium mb-3 tracking-wide uppercase">Our Heritage in Food Excellence</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Partnering for Sustainable Growth</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-3"></div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                AG Foods, founded in 2010, is a leading food agency. We excel in developing and marketing innovative food products, connecting brands with consumers through strategic insights and tailored solutions.
              </p>
              <br />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our dedicated team collaborates closely with partners, ensuring products meet and exceed market expectations, driving growth and visibility in the food sector.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={Image01} alt="AG Foods Team" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Values Section */}
      <MissionValuesSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose AG Foods Canada?
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide everything you need for a successful career in Canada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Authentic Job Listings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-3xl shadow-xl group"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Job Listings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-orange-900/70 to-orange-950/90"></div>
              </div>
              <div className="relative p-8 text-white min-h-[350px] flex flex-col">
                <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Authentic Job Listings</h3>
                <p className="text-orange-100 leading-relaxed">
                  We offer verified job opportunities in Canada with top companies.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Visa Sponsorship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-3xl shadow-xl group"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Visa Sponsorship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-950/90"></div>
              </div>
              <div className="relative p-8 text-white min-h-[350px] flex flex-col">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Visa Sponsorship</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our jobs come with full visa support, ensuring an easy application process.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Comprehensive Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-3xl shadow-xl group"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Benefits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-amber-950/90"></div>
              </div>
              <div className="relative p-8 text-white min-h-[350px] flex flex-col">
                <div className="bg-yellow-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Benefits</h3>
                <p className="text-yellow-100 leading-relaxed">
                  Workers enjoy free lodging, meals, medical insurance, and travel support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Experienced professionals guiding AG Foods towards excellence in food innovation and global partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="CEO"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CEO</h3>
                <p className="text-green-700 font-semibold mb-4">Executive Leadership</p>
                <p className="text-gray-600 leading-relaxed">
                  Strategic visionary driving AG Foods' growth and innovation in the global food industry.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Strategy
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Innovation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Manager Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Manager"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Manager</h3>
                <p className="text-green-700 font-semibold mb-4">Operations Excellence</p>
                <p className="text-gray-600 leading-relaxed">
                  Overseeing daily operations and ensuring quality standards across all AG Foods facilities.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Operations
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Quality
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Supervisor Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Supervisor"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Supervisor</h3>
                <p className="text-green-700 font-semibold mb-4">Team Leadership</p>
                <p className="text-gray-600 leading-relaxed">
                  Leading production teams and maintaining highest standards in food processing and packaging.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Production
                  </span>
                </div>
              </div>
            </motion.div>

            {/* John Teto Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="John Teto"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">John Teto</h3>
                <p className="text-green-700 font-semibold mb-4">Business Development</p>
                <p className="text-gray-600 leading-relaxed">
                  Expanding partnerships and driving market growth through strategic business initiatives.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Business Dev
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                    Partnerships
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Akash Verma Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Akash Verma"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Akash Verma</h3>
                <p className="text-green-700 font-semibold mb-4">Technical Operations</p>
                <p className="text-gray-600 leading-relaxed">
                  Managing technical aspects of production and ensuring operational efficiency.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                    Technical
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Efficiency
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Syed Khalid Mehmood Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50"></div>
              <div className="relative p-8 min-h-[350px] flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Syed Khalid Mehmood"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Syed Khalid Mehmood</h3>
                <p className="text-green-700 font-semibold mb-4">International Relations</p>
                <p className="text-gray-600 leading-relaxed">
                  Facilitating global partnerships and managing international workforce programs.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Global Relations
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    Workforce
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200 rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Partner With Our Experienced Team
              </h3>
              <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                Our leadership team brings decades of combined experience in food industry innovation,
                business development, and international operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/apply-now")}
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full transition text-base sm:text-lg inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition text-base sm:text-lg inline-flex items-center justify-center"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Explore Partnerships
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <JobsSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-20 lg:py-24"
      >
        {/* ... Why Choose Us content ... */}
      </motion.div>

      {/* Simple Steps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/85 to-green-900/90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Simple Steps To Start Your Job In Canada
            </h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6 transform origin-center"
            ></motion.div>
            <p className="text-green-100 text-lg sm:text-xl max-w-3xl mx-auto">
              We make it easy for international applicants to join our team. From applying online to arriving in Canada, we guide you every step of the way.
            </p>
          </motion.div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Timeline Connector Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-yellow-400 to-green-500 transform -translate-x-1/2 z-0"
              style={{ transformOrigin: 'top' }}
            ></motion.div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center mb-16 lg:mb-20 relative"
            >
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Step 1: Online Application & Profile Review
                    </h3>
                  </div>
                  <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                    Submit your CV and job preferences. We'll evaluate your profile for the best-suited roles. Work permit eligibility is checked at this stage.
                  </p>
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/apply-now")}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition inline-flex items-center"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Start Your Application
                    </motion.button>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="order-1 lg:order-2 lg:w-1/2 flex justify-center lg:justify-start relative z-10"
              >
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <span className="text-white text-4xl sm:text-5xl font-bold">01</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-green-600 rounded-full opacity-30"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col lg:flex-row items-center mb-16 lg:mb-20 relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 relative z-10"
              >
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <span className="text-white text-4xl sm:text-5xl font-bold">02</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="absolute inset-0 bg-yellow-500 rounded-full opacity-30"
                  ></motion.div>
                </div>
              </motion.div>
              <div className="lg:w-1/2 lg:pl-12 order-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white rounded-full p-2 mr-4">
                      <Video className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Step 2: Interview & Job Confirmation
                    </h3>
                  </div>
                  <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                    Shortlisted candidates are invited for a video interview. Once approved, you'll receive your official job offer and LMIA documents.
                  </p>
                  <div className="mt-6">
                    <div className="flex items-center text-yellow-300">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Average processing time: 2-3 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row items-center relative"
            >
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                      <Plane className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Step 3: Visa Processing & Onboarding
                    </h3>
                  </div>
                  <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                    We assist with visa paperwork, travel guidance, and your smooth arrival in Canada. Our onboarding team helps you settle into your new job and life.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-green-100">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                      <span>Visa Assistance</span>
                    </div>
                    <div className="flex items-center text-green-100">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                      <span>Travel Guidance</span>
                    </div>
                    <div className="flex items-center text-green-100">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                      <span>Airport Pickup</span>
                    </div>
                    <div className="flex items-center text-green-100">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                      <span>Housing Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="order-1 lg:order-2 lg:w-1/2 flex justify-center lg:justify-start relative z-10"
              >
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-700 to-green-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <span className="text-white text-4xl sm:text-5xl font-bold">03</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                    className="absolute inset-0 bg-green-700 rounded-full opacity-30"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 sm:mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-green-800/80 to-green-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Your Canadian Dream Starts Here
              </h3>
              <p className="text-green-100 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                Join our family of international professionals. We handle the paperwork, you focus on your new career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/apply-now")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition text-base sm:text-lg inline-flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Begin Your Application
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition text-base sm:text-lg inline-flex items-center justify-center"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </motion.button>
              </div>
              <p className="text-green-200 mt-6 text-sm">
                <CheckCircle className="w-4 h-4 inline mr-1" />
                Average visa processing time: 4-6 weeks with our expedited support
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <img src={logoImage} alt="ECO Foods Canada Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain mr-4" />
                <h2 className="text-2xl font-bold text-white">AG Foods Packing Canada</h2>
              </div>
              <p className="text-green-200 text-base leading-relaxed mb-6">
                Building sustainable food futures with global talent. Partnering for growth, innovation, and excellence in Canadian food production.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                    Home
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#about-us"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                    About Us
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                    AG Foods Canada Jobs
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                    Contact Us
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            {/* Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">Jobs</h3>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                    Vehicle Driver
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                    Helper Staff
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                    Fruit Packaging
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                    Factory Cleaner
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-green-200 hover:text-white transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                    Vegetable Sorter
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-800 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <a href="tel:+447454526864" className="text-green-200 hover:text-white transition">+447454526864</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-800 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <a href="mailto:ecofoodscanada3@gmail.com" className="text-green-200 hover:text-white transition">ecofoodscanada3@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-800 p-2 rounded-lg mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-green-200">
                      27, Gerrard Street E,<br />
                      Gerrard Square, Ontario,<br />
                      M5B 1C8, Canada
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-800 mb-8"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-green-300 text-sm sm:text-base">
              © {new Date().getFullYear()} ECO Foods Canada. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-green-400 text-xs sm:text-sm">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span className="text-green-600">•</span>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <span className="text-green-600">•</span>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
              <span className="text-green-600">•</span>
              <a href="#" className="hover:text-white transition">Disclaimer</a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/0019027059056"
        rel="noopener noreferrer"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 group" // group کلاس شامل کریں
        // فلوٹنگ حرکت (اختیاری)
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {/* WhatsApp بٹن - اصل ویب سائٹ جیسا */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105">

          {/* WhatsApp آئیکن */}
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-white"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        </div>
      </motion.a>

      {/* <motion.a
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        href="https://wa.me/15819001004"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition transform hover:scale-110 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a> */}
    </div>
  );
}
