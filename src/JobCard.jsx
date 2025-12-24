import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import inventry from './assets/InventoryAssistant.jpg';
import dataentry from './assets/DataEntry.jpg';
import electrician from './assets/electrician.jpg';
import logistic from './assets/logistic.jpg';
import warehouse from './assets/warehouse.jpg';
import packing from './assets/packing.jpg';

const JobCard = ({ title, salary, description, image, delay }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
            <div className="flex items-start gap-4 p-4 sm:p-6">
                <div className="bg-gray-900 rounded-xl p-3 sm:p-4 flex-shrink-0">
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-base sm:text-lg text-gray-600 font-semibold mb-3">{salary}</p>
                </div>
            </div>

            {image && (
                <div className="px-4 sm:px-6 pb-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 sm:h-56 object-cover rounded-xl"
                    />
                </div>
            )}

            {description && (
                <div className="px-4 sm:px-6 pb-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        {description}
                    </p>
                </div>
            )}

            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate("/apply-now")}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
            </div>
        </motion.div>
    )
};

export default function EcoFoodsJobs() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const goToAboutUs = () => {
        navigate('/'); // go to home page
        setTimeout(() => {
            const el = document.getElementById('about-us');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // slight delay to ensure DOM renders
    };

    const jobs = [
        {
            title: "Heavy Vehicle Driver",
            salary: "$26–$30/hour",
            description: "Operate long-haul transport trucks. Valid Class 1 / AZ license required.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
        },
        {
            title: "Light Vehicle Driver",
            salary: "$20–$24/hour",
            description: "Local deliveries with company vehicles. Clean driving record required.",
            image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55"
        },
        {
            title: "Helper Staff",
            salary: "$17–$19/hour",
            description: "Support factory operations, lifting, cleaning, and assistance tasks.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
        },
        {
            title: "Fruit Packaging Worker",
            salary: "$18–$22/hour",
            description: "Sorting, packaging, and quality checking of fresh fruits.",
            image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5"
        },
        {
            title: "Packaging Specialist",
            salary: "$19–$23/hour",
            description: "Operate packaging machines and ensure product safety standards.",
            image: `${packing}`
        },
        {
            title: "Food Production Worker",
            salary: "$18–$22/hour",
            description: "Work on food production lines following hygiene and safety rules.",
            image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d"
        },
        {
            title: "Warehouse Associate",
            salary: "$19–$23/hour",
            description: "Handle inventory, loading, unloading, and warehouse operations.",
            image: `${warehouse}`
        },
        {
            title: "Inventory Assistant",
            salary: "$18–$22/hour",
            description: "Stock tracking, record keeping, and inventory audits.",
            image: `${inventry}`
        },
        {
            title: "Security Officer",
            salary: "$20–$25/hour",
            description: "Ensure safety of facilities, staff, and company assets.",
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
        },
        {
            title: "Maintenance Technician",
            salary: "$24–$30/hour",
            description: "Maintain machinery, perform repairs, and preventive maintenance.",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
        },
        {
            title: "Plumber",
            salary: "$25–$32/hour",
            description: "Install and repair water supply and drainage systems.",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
        },
        {
            title: "Electrician",
            salary: "$26–$35/hour",
            description: "Install and maintain electrical systems and equipment.",
            image: `${electrician}`
        },
        {
            title: "Sales Associate",
            salary: "$18–$22/hour",
            description: "Customer handling, sales support, and product guidance.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        },
        {
            title: "Logistics Coordinator",
            salary: "$22–$28/hour",
            description: "Coordinate shipments, schedules, and supply chain activities.",
            image: `${logistic}`
        },
        {
            title: "Data Entry Clerk",
            salary: "$17–$20/hour",
            description: "Accurate data entry, documentation, and record management.",
            image: `${dataentry}`
        }
    ];

    // const jobs = [
    //     {
    //         title: "Heavy Vehicle Driver",
    //         salary: "$26–$30/hour",
    //         description: "Operate transport trucks between provinces. Class 1 or AZ license required.",
    //         image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
    //     },
    //     {
    //         title: "Light Vehicle Driver",
    //         salary: "$20–$24/hour",
    //         description: "Handle short-distance deliveries. Must have a valid license and clean driving record.",
    //         image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065"
    //     },
    //     {
    //         title: "Helper Staff",
    //         salary: "$17–$19/hour",
    //         description: "Assist production teams with cleaning, lifting, and general support tasks.",
    //         image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070"
    //     },
    //     {
    //         title: "Fruit Packaging",
    //         salary: "$18–$22/hour",
    //         description: "Sort, inspect, and package fresh fruits. Attention to detail required.",
    //         image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=2076"
    //     },
    //     {
    //         title: "Factory Cleaner",
    //         salary: "$17–$20/hour",
    //         description: "Maintain cleanliness and hygiene standards in production facilities.",
    //         image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070"
    //     },
    //     {
    //         title: "Vegetable Sorter",
    //         salary: "$18–$21/hour",
    //         description: "Sort and grade vegetables according to quality standards.",
    //         image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070"
    //     },
    // ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-sm sticky top-0 z-50 shadow-md"
            >
                <div className="container mx-auto px-4">

                    {/* Navigation */}
                    <nav className="flex items-center justify-between py-3 lg:py-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-xl sm:text-2xl font-bold text-white">A</span>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900">AG Foods</h1>
                                <p className="text-xs text-green-600">CANADA</p>
                            </div>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                            <a href="#" onClick={() => navigate("/")} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
                            <a href="#about-us" onClick={goToAboutUs} className="text-gray-700 hover:text-green-600 transition-colors font-medium">About Us</a>
                            {/* <a href="#jobs" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">AG Foods Canada Jobs</a> */}
                            <a href="#apply" onClick={() => navigate('/apply-now')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Apply Now</a>
                            <a href="#status" onClick={() => navigate("/status")}  className="text-red-600 hover:text-red-700 transition-colors font-medium">Check Status</a>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/apply-now")}
                            className="hidden lg:block bg-green-600 text-white px-5 xl:px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors text-sm xl:text-base"
                        >
                            Apply Now
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-gray-700 hover:text-green-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden pb-4 border-t border-gray-200 mt-2"
                        >
                            <div className="flex flex-col gap-1 pt-4">
                                <a href="#" onClick={() => navigate("/")} className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg">Home</a>
                                <a href="#about-us" onClick={goToAboutUs} className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg">About Us</a>
                                {/* <a href="#jobs" className="text-green-600 bg-green-50 font-semibold py-3 px-4 rounded-lg">AG Foods Canada Jobs</a> */}
                                <a href="#apply" onClick={() => navigate("/apply-now")} className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors font-medium py-3 px-4 rounded-lg">Apply Now</a>
                                <a href="#status" onClick={() => navigate("/status")}  className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors font-medium py-3 px-4 rounded-lg">Check Status</a>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <button onClick={() => navigate("/apply-now")} className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.header>

            {/* Hero Section with Background */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 sm:py-28 lg:py-32 overflow-hidden"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-green-700/95"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6"
                    >
                        AG Foods Canada Jobs
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto text-green-100 px-4"
                    >
                        Explore LMIA-approved factory and warehouse jobs in Canada with visa support
                        for international applicants.
                    </motion.p>
                </div>
            </motion.section>

            {/* Job Cards Section */}
            <section id="jobs" className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Available Positions</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">Join our team and build your career in Canada</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                        {jobs.map((job, index) => (
                            <JobCard
                                key={index}
                                title={job.title}
                                salary={job.salary}
                                description={job.description}
                                image={job.image}
                                delay={0.2 + index * 0.1}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-8 sm:mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/apply-now")}
                            className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-green-700 transition-colors shadow-lg"
                        >
                            Apply for Jobs
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">

                        {/* Logo and Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sm:col-span-2 lg:col-span-1"
                        >
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-xl sm:text-2xl font-bold">A</span>
                                </div>
                                <div>
                                    <h2 className="text-lg sm:text-xl font-bold text-white">AG Foods</h2>
                                    <p className="text-xs text-green-300">Packing Canada</p>
                                </div>
                            </div>
                            <p className="text-green-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                Building sustainable food futures with global talent. Partnering for growth, innovation, and excellence.
                            </p>
                            <div className="flex space-x-3">
                                {['F', 'T', 'I', 'L'].map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        href="#"
                                        className="bg-green-800 hover:bg-green-700 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition text-sm font-semibold"
                                    >
                                        {social}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b-2 border-green-700 inline-block">Quick Links</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                <li>
                                    <motion.a whileHover={{ x: 5 }} href="#" className="text-sm sm:text-base text-green-200 hover:text-white transition flex items-center group">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                                        Home
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a whileHover={{ x: 5 }} href="#about-us" className="text-sm sm:text-base text-green-200 hover:text-white transition flex items-center group">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                                        About Us
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a whileHover={{ x: 5 }} href="#jobs" className="text-sm sm:text-base text-green-200 hover:text-white transition flex items-center group">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-400 transition"></span>
                                        AG Foods Canada Jobs
                                    </motion.a>
                                </li>
                                <li>
                                    <motion.a whileHover={{ x: 5 }} href="#" className="text-sm sm:text-base text-green-200 hover:text-white transition flex items-center group">
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
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b-2 border-green-700 inline-block">Jobs</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {['Vehicle Driver', 'Helper Staff', 'Fruit Packaging', 'Factory Cleaner', 'Vegetable Sorter'].map((job, idx) => (
                                    <li key={idx}>
                                        <motion.a whileHover={{ x: 5 }} href="#" className="text-sm sm:text-base text-green-200 hover:text-white transition flex items-center group">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-green-400 transition"></span>
                                            {job}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b-2 border-green-700 inline-block">Contact Info</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-green-800 p-2 rounded-lg mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm sm:text-base">Phone Number</p>
                                        <a href="tel:+15819001004" className="text-xs sm:text-sm text-green-200 hover:text-white transition">+1 581-900-1004</a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-800 p-2 rounded-lg mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm sm:text-base">Email Address</p>
                                        <a href="mailto:agfoodscanada@gmail.com" className="text-xs sm:text-sm text-green-200 hover:text-white transition break-all">agfoodscanada@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-green-800 p-2 rounded-lg mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm sm:text-base">Office Address</p>
                                        <p className="text-xs sm:text-sm text-green-200">
                                            27, Gerrard Street E,<br />
                                            Ontario, M5B 1C8, Canada
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-green-800 mb-6 sm:mb-8"></div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-green-300 text-xs sm:text-sm mb-3 sm:mb-4">
                            © {new Date().getFullYear()} AG Foods Canada. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-green-400 text-xs">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <span className="text-green-600">•</span>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                            <span className="text-green-600">•</span>
                            <a href="#" className="hover:text-white transition">Cookie Policy</a>
                        </div>
                    </motion.div>
                </div>
            </footer>

            {/* WhatsApp Button */}
             <motion.a
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    href="https://wa.me/0019027059056"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50"
                  >
                    <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-1 rounded-full shadow-xl transition-all hover:scale-105">
            
                      {/* WhatsApp Icon */}
                      <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
                        </svg>
                      </div>
            
                      {/* Text */}
                      <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
                        AG Foods Canada
                      </span>
                    </div>
                  </motion.a>
            {/* <motion.a
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                href="https://wa.me/15819001004"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition transform hover:scale-110 z-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </motion.a> */}
        </div>
    );
}