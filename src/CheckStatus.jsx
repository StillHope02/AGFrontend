import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search, CheckCircle, XCircle, Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "./assets/Logo.webp"; // Adjust path as needed

export default function CheckStatus() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [passportNumber, setPassportNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`http://localhost:5000/api/check-status/${passportNumber}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Application not found");
        setLoading(false);
        return;
      }

      setResult(data);
      setLoading(false);

      // If approved, automatically open PDF in new tab
      if (data.status === "Approved" && data.userId) {
        setTimeout(() => {
          window.open(`http://localhost:5000/api/users/${data.userId}/pdf`, '_blank');
        }, 500);
      }

    } catch (err) {
      setError("Error checking status. Please try again.");
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-16 h-16 text-green-600" />;
      case "Rejected":
        return <XCircle className="w-16 h-16 text-red-600" />;
      default:
        return <Clock className="w-16 h-16 text-yellow-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800 border-green-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <img
            src={logoImage}
            alt="Logo"
            className="w-14 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden lg:flex gap-6 items-center">
            <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button>
            <button onClick={() => navigate("/jobs")} className="hover:text-green-700">Jobs</button>
            <button onClick={() => navigate("/apply")} className="hover:text-green-700">Apply Now</button>
            <button className="font-bold text-green-700">Check Status</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2">
            <button onClick={() => navigate("/")} className="block w-full text-left py-2">Home</button>
            <button onClick={() => navigate("/jobs")} className="block w-full text-left py-2">Jobs</button>
            <button onClick={() => navigate("/apply")} className="block w-full text-left py-2">Apply Now</button>
            <button className="block w-full text-left py-2 font-bold text-green-700">Check Status</button>
          </div>
        )}
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex justify-center items-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-10 px-6">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Check Application Status</h1>
              <p className="text-green-100">Enter your passport number to view your application status</p>
            </div>

            {/* Search Form */}
            <div className="p-8">
              <form onSubmit={handleCheck} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Passport Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
                      placeholder="Enter passport number (e.g., AB1234567)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-600 focus:outline-none"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Checking...
                    </span>
                  ) : (
                    "Check Status"
                  )}
                </button>
              </form>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
                >
                  <p className="text-red-700 font-medium text-center">{error}</p>
                </motion.div>
              )}

              {/* Result Display */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 space-y-6"
                >
                  {/* Status Badge */}
                  <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-xl">
                    {getStatusIcon(result.status)}
                    <div className={`px-6 py-2 rounded-full border-2 font-bold text-lg ${getStatusColor(result.status)}`}>
                      {result.status}
                    </div>
                  </div>

                  {/* Applicant Details */}
                  <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">Application Details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-semibold text-gray-900">{result.name}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900">{result.email}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-semibold text-gray-900">{result.phone}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Country</p>
                        <p className="font-semibold text-gray-900">{result.country}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Experience</p>
                        <p className="font-semibold text-gray-900">{result.experience}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600">Applied On</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(result.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Approved Message & PDF Button */}
                  {result.status === "Approved" && result.userId && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center space-y-4">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                      <h3 className="text-xl font-bold text-green-800">
                        Congratulations! Your application has been approved! 🎉
                      </h3>
                      <p className="text-green-700">
                        Your job offer letter has been opened in a new tab. If it didn't open, click the button below.
                      </p>
                      <button
                        onClick={() => window.open(`http://localhost:5000/api/users/${result.userId}/pdf`, '_blank')}
                        className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-all"
                      >
                        <FileText className="w-5 h-5" />
                        Download Offer Letter PDF
                      </button>
                    </div>
                  )}

                  {/* Pending Message */}
                  {result.status === "Pending" && (
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                      <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-yellow-800 mb-2">
                        Application Under Review
                      </h3>
                      <p className="text-yellow-700">
                        Your application is being reviewed by our team. Please check back later.
                      </p>
                    </div>
                  )}

                  {/* Rejected Message */}
                  {result.status === "Rejected" && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                      <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-red-800 mb-2">
                        Application Not Approved
                      </h3>
                      <p className="text-red-700">
                        Unfortunately, your application was not approved at this time. You may apply again after 30 days.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 text-center py-4 px-6 text-sm text-gray-600 border-t">
              For any queries, contact us at: <span className="font-semibold">support@agfood.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}