import React from 'react';
import { motion } from 'framer-motion';
import { GiFruitBowl, GiWheat, GiFactory, GiTruck, GiBoxUnpacking, GiFruitTree } from 'react-icons/gi';
import bgImage from './assets/jobsSection.jpg'; // your background image

const jobs = [
  { title: "Factory Packing Assistant", description: "Start immediately with minimal training. Perfect for newcomers eager to learn food packaging.", icon: <GiFactory className="w-10 h-10 text-orange-500" /> },
  { title: "Fruit and Vegetable Sorter", description: "Sort fresh produce by size and quality in fast-paced environments. Easy to learn.", icon: <GiFruitBowl className="w-10 h-10 text-green-500" /> },
  { title: "Food Production Line Operator", description: "Operate machines and assist in food packaging. Training provided for all levels.", icon: <GiWheat className="w-10 h-10 text-yellow-500" /> },
  { title: "Logistics Coordinator", description: "Manage shipments and coordinate warehouse operations efficiently.", icon: <GiTruck className="w-10 h-10 text-blue-500" /> },
  { title: "Warehouse Assistant", description: "Support daily warehouse operations, inventory management, and stock handling.", icon: <GiBoxUnpacking className="w-10 h-10 text-green-600" /> },
  { title: "Packaging Specialist", description: "Ensure products are packaged correctly and meet quality standards.", icon: <GiFruitTree className="w-10 h-10 text-orange-600" /> },
];

export default function JobsSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */} 
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-green-300 font-semibold text-sm sm:text-base mb-2 tracking-wide uppercase">
          Career Opportunities
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Work in Food Packing & Agriculture
        </h2>
        <p className="text-gray-100 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Explore rewarding job opportunities in food production, packaging, and agriculture. We provide training, visa support, and career growth in Canada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 border border-green-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer text-gray-900"
            >
              <div className="mb-4 bg-green-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                {job.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{job.description}</p>
              <a href="#" className="text-orange-500 font-medium hover:underline inline-flex items-center">
                View All Jobs <span className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full transition text-sm sm:text-base"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
