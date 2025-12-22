import React from 'react';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

export default function MissionValuesSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="mb-12 lg:mb-16">
          <p className="text-blue-600 font-semibold text-sm sm:text-base mb-3 tracking-wider uppercase">
            OUR COMMITMENT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Mission and Values that Drive Us
          </h2>
          <div className="w-20 h-1 bg-yellow-500"></div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Statement Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-l-4 border-blue-600">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wide">
                  OUR PURPOSE
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Mission Statement
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At AG Foods, our mission is to empower food brands through innovative solutions and strategic insights, fostering meaningful connections between products and consumers while ensuring quality and excellence in all our endeavors.
            </p>
          </div>

          {/* Core Principles Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-100 rounded-full p-3">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1 uppercase tracking-wide">
                  CORE PRINCIPLES
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Values We Uphold
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              We are committed to integrity, collaboration, and creativity. Our values guide our interactions with clients and partners, ensuring we deliver personalized services and maintain a focus on quality that drives success in the food industry.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}