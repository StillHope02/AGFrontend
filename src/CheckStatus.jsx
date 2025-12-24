// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Menu, X, Search, CheckCircle, XCircle, Clock, FileText } from "lucide-react";
// // import { motion } from "framer-motion";
// // import logoImage from "./assets/Logo.webp"; // Adjust path as needed

// // export default function CheckStatus() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [passportNumber, setPassportNumber] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleCheck = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setResult(null);

// //     try {
// //       const res = await fetch(`https://agfoodbackend-production.up.railway.app/api/check-status/${passportNumber}`);
// //       const data = await res.json();

// //       if (!res.ok) {
// //         setError(data.message || "Application not found");
// //         setLoading(false);
// //         return;
// //       }

// //       setResult(data);
// //       setLoading(false);

// //       // If approved, automatically open PDF in new tab
// //       if (data.status === "Approved" && data.userId) {
// //         setTimeout(() => {
// //           window.open(`https://agfoodbackend-production.up.railway.app/api/users/${data.userId}/pdf`, '_blank');
// //         }, 500);
// //       }

// //     } catch (err) {
// //       setError("Error checking status. Please try again.");
// //       setLoading(false);
// //     }
// //   };

// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case "Approved":
// //         return <CheckCircle className="w-16 h-16 text-green-600" />;
// //       case "Rejected":
// //         return <XCircle className="w-16 h-16 text-red-600" />;
// //       default:
// //         return <Clock className="w-16 h-16 text-yellow-600" />;
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Approved":
// //         return "bg-green-100 text-green-800 border-green-300";
// //       case "Rejected":
// //         return "bg-red-100 text-red-800 border-red-300";
// //       default:
// //         return "bg-yellow-100 text-yellow-800 border-yellow-300";
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      
// //       {/* ================= NAVBAR ================= */}
// //       <nav className="bg-white shadow sticky top-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
// //           <img
// //             src={logoImage}
// //             alt="Logo"
// //             className="w-14 cursor-pointer"
// //             onClick={() => navigate("/")}
// //           />

// //           <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //             {isMenuOpen ? <X /> : <Menu />}
// //           </button>

// //           <div className="hidden lg:flex gap-6 items-center">
// //             <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button>
// //             <button onClick={() => navigate("/jobs")} className="hover:text-green-700">Jobs</button>
// //             <button onClick={() => navigate("/apply")} className="hover:text-green-700">Apply Now</button>
// //             <button className="font-bold text-green-700">Check Status</button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="lg:hidden bg-white border-t p-4 space-y-2">
// //             <button onClick={() => navigate("/")} className="block w-full text-left py-2">Home</button>
// //             <button onClick={() => navigate("/jobs")} className="block w-full text-left py-2">Jobs</button>
// //             <button onClick={() => navigate("/apply")} className="block w-full text-left py-2">Apply Now</button>
// //             <button className="block w-full text-left py-2 font-bold text-green-700">Check Status</button>
// //           </div>
// //         )}
// //       </nav>

// //       {/* ================= MAIN CONTENT ================= */}
// //       <div className="flex justify-center items-center px-4 py-16">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="w-full max-w-2xl"
// //         >
// //           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
// //             {/* Header */}
// //             <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-10 px-6">
// //               <Search className="w-16 h-16 mx-auto mb-4" />
// //               <h1 className="text-3xl font-bold mb-2">Check Application Status</h1>
// //               <p className="text-green-100">Enter your passport number to view your application status</p>
// //             </div>

// //             {/* Search Form */}
// //             <div className="p-8">
// //               <form onSubmit={handleCheck} className="space-y-6">
// //                 <div>
// //                   <label className="block text-sm font-semibold mb-2 text-gray-700">
// //                     Passport Number
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type="text"
// //                       required
// //                       value={passportNumber}
// //                       onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
// //                       placeholder="Enter passport number (e.g., AB1234567)"
// //                       className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-600 focus:outline-none"
// //                     />
// //                     <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
// //                   </div>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   disabled={loading}
// //                   className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
// //                 >
// //                   {loading ? (
// //                     <span className="flex items-center justify-center gap-2">
// //                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// //                       Checking...
// //                     </span>
// //                   ) : (
// //                     "Check Status"
// //                   )}
// //                 </button>
// //               </form>

// //               {/* Error Message */}
// //               {error && (
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
// //                 >
// //                   <p className="text-red-700 font-medium text-center">{error}</p>
// //                 </motion.div>
// //               )}

// //               {/* Result Display */}
// //               {result && (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="mt-8 space-y-6"
// //                 >
// //                   {/* Status Badge */}
// //                   <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-xl">
// //                     {getStatusIcon(result.status)}
// //                     <div className={`px-6 py-2 rounded-full border-2 font-bold text-lg ${getStatusColor(result.status)}`}>
// //                       {result.status}
// //                     </div>
// //                   </div>

// //                   {/* Applicant Details */}
// //                   <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
// //                     <h3 className="font-bold text-lg text-gray-800 mb-4">Application Details</h3>
                    
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                       <div>
// //                         <p className="text-sm text-gray-600">Name</p>
// //                         <p className="font-semibold text-gray-900">{result.name}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-600">Email</p>
// //                         <p className="font-semibold text-gray-900">{result.email}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-600">Phone</p>
// //                         <p className="font-semibold text-gray-900">{result.phone}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-600">Country</p>
// //                         <p className="font-semibold text-gray-900">{result.country}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-600">Experience</p>
// //                         <p className="font-semibold text-gray-900">{result.experience}</p>
// //                       </div>
                      
// //                       <div>
// //                         <p className="text-sm text-gray-600">Applied On</p>
// //                         <p className="font-semibold text-gray-900">
// //                           {new Date(result.createdAt).toLocaleDateString()}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Approved Message & PDF Button */}
// //                   {result.status === "Approved" && result.userId && (
// //                     <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center space-y-4">
// //                       <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
// //                       <h3 className="text-xl font-bold text-green-800">
// //                         Congratulations! Your application has been approved! 🎉
// //                       </h3>
// //                       <p className="text-green-700">
// //                         Your job offer letter has been opened in a new tab. If it didn't open, click the button below.
// //                       </p>
// //                       <button
// //                         onClick={() => window.open(`http://localhost:5000/api/users/${result.userId}/pdf`, '_blank')}
// //                         className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-all"
// //                       >
// //                         <FileText className="w-5 h-5" />
// //                         Download Offer Letter PDF
// //                       </button>
// //                     </div>
// //                   )}

// //                   {/* Pending Message */}
// //                   {result.status === "Pending" && (
// //                     <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
// //                       <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
// //                       <h3 className="text-lg font-bold text-yellow-800 mb-2">
// //                         Application Under Review
// //                       </h3>
// //                       <p className="text-yellow-700">
// //                         Your application is being reviewed by our team. Please check back later.
// //                       </p>
// //                     </div>
// //                   )}

// //                   {/* Rejected Message */}
// //                   {result.status === "Rejected" && (
// //                     <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
// //                       <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
// //                       <h3 className="text-lg font-bold text-red-800 mb-2">
// //                         Application Not Approved
// //                       </h3>
// //                       <p className="text-red-700">
// //                         Unfortunately, your application was not approved at this time. You may apply again after 30 days.
// //                       </p>
// //                     </div>
// //                   )}
// //                 </motion.div>
// //               )}
// //             </div>

// //             {/* Footer Note */}
// //             <div className="bg-gray-50 text-center py-4 px-6 text-sm text-gray-600 border-t">
// //               For any queries, contact us at: <span className="font-semibold">support@agfood.com</span>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, Search, CheckCircle, XCircle, Clock, FileText } from "lucide-react";
// import { motion } from "framer-motion";
// import logoImage from "./assets/Logo.webp"; // Adjust path as needed

// export default function CheckStatus() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [passportNumber, setPassportNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleCheck = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const res = await fetch(`http://localhost:5000/api/check-status/${passportNumber}`);
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Application not found");
//         setLoading(false);
//         return;
//       }

//       setResult(data);
//       setLoading(false);

//       // If approved, automatically open PDF in new tab
//       if (data.status === "Approved" && data.userId) {
//         setTimeout(() => {
//           window.open(`http://localhost:5000/api/users/${data.userId}/pdf`, '_blank');
//         }, 500);
//       }

//     } catch (err) {
//       setError("Error checking status. Please try again.");
//       setLoading(false);
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Approved":
//         return <CheckCircle className="w-16 h-16 text-green-600" />;
//       case "Rejected":
//         return <XCircle className="w-16 h-16 text-red-600" />;
//       default:
//         return <Clock className="w-16 h-16 text-yellow-600" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "Rejected":
//         return "bg-red-100 text-red-800 border-red-300";
//       default:
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      
//       {/* ================= NAVBAR ================= */}
//       <nav className="bg-white shadow sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//           <img
//             src={logoImage}
//             alt="Logo"
//             className="w-14 cursor-pointer"
//             onClick={() => navigate("/")}
//           />

//           <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>

//           <div className="hidden lg:flex gap-6 items-center">
//             <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button>
//             <button onClick={() => navigate("/jobs")} className="hover:text-green-700">Jobs</button>
//             <button onClick={() => navigate("/apply")} className="hover:text-green-700">Apply Now</button>
//             <button className="font-bold text-green-700">Check Status</button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t p-4 space-y-2">
//             <button onClick={() => navigate("/")} className="block w-full text-left py-2">Home</button>
//             <button onClick={() => navigate("/jobs")} className="block w-full text-left py-2">Jobs</button>
//             <button onClick={() => navigate("/apply")} className="block w-full text-left py-2">Apply Now</button>
//             <button className="block w-full text-left py-2 font-bold text-green-700">Check Status</button>
//           </div>
//         )}
//       </nav>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="flex justify-center items-center px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-2xl"
//         >
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-10 px-6">
//               <Search className="w-16 h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-bold mb-2">Check Application Status</h1>
//               <p className="text-green-100">Enter your passport number to view your application status</p>
//             </div>

//             {/* Search Form */}
//             <div className="p-8">
//               <form onSubmit={handleCheck} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold mb-2 text-gray-700">
//                     Passport Number
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       required
//                       value={passportNumber}
//                       onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
//                       placeholder="Enter passport number (e.g., AB1234567)"
//                       className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-600 focus:outline-none"
//                     />
//                     <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Checking...
//                     </span>
//                   ) : (
//                     "Check Status"
//                   )}
//                 </button>
//               </form>

//               {/* Error Message */}
//               {error && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
//                 >
//                   <p className="text-red-700 font-medium text-center">{error}</p>
//                 </motion.div>
//               )}

//               {/* Result Display */}
//               {result && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-8 space-y-6"
//                 >
//                   {/* Status Badge */}
//                   <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-xl">
//                     {getStatusIcon(result.status)}
//                     <div className={`px-6 py-2 rounded-full border-2 font-bold text-lg ${getStatusColor(result.status)}`}>
//                       {result.status}
//                     </div>
//                   </div>

//                   {/* Applicant Details */}
//                   <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
//                     <h3 className="font-bold text-lg text-gray-800 mb-4">Application Details</h3>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-600">Name</p>
//                         <p className="font-semibold text-gray-900">{result.name}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Email</p>
//                         <p className="font-semibold text-gray-900">{result.email}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Phone</p>
//                         <p className="font-semibold text-gray-900">{result.phone}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Country</p>
//                         <p className="font-semibold text-gray-900">{result.country}</p>
//                       </div>

//                       {/* ✅ JOB POSITION DISPLAY */}
//                       <div>
//                         <p className="text-sm text-gray-600">Job Position</p>
//                         <p className="font-semibold text-gray-900">{result.jobPosition || "N/A"}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Experience</p>
//                         <p className="font-semibold text-gray-900">{result.experience}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Applied On</p>
//                         <p className="font-semibold text-gray-900">
//                           {new Date(result.createdAt).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Approved Message & PDF Button */}
//                   {result.status === "Approved" && result.userId && (
//                     <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center space-y-4">
//                       <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
//                       <h3 className="text-xl font-bold text-green-800">
//                         Congratulations! Your application has been approved! 🎉
//                       </h3>
//                       <p className="text-green-700">
//                         Your job offer letter has been opened in a new tab. If it didn't open, click the button below.
//                       </p>
//                       <button
//                         onClick={() => window.open(`http://localhost:5000/api/users/${result.userId}/pdf`, '_blank')}
//                         className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-all"
//                       >
//                         <FileText className="w-5 h-5" />
//                         Download Offer Letter PDF
//                       </button>
//                     </div>
//                   )}

//                   {/* Pending Message */}
//                   {result.status === "Pending" && (
//                     <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
//                       <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
//                       <h3 className="text-lg font-bold text-yellow-800 mb-2">
//                         Application Under Review
//                       </h3>
//                       <p className="text-yellow-700">
//                         Your application is being reviewed by our team. Please check back later.
//                       </p>
//                     </div>
//                   )}

//                   {/* Rejected Message */}
//                   {result.status === "Rejected" && (
//                     <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
//                       <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
//                       <h3 className="text-lg font-bold text-red-800 mb-2">
//                         Application Not Approved
//                       </h3>
//                       <p className="text-red-700">
//                         Unfortunately, your application was not approved at this time. You may apply again after 30 days.
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>
//               )}
//             </div>

//             {/* Footer Note */}
//             <div className="bg-gray-50 text-center py-4 px-6 text-sm text-gray-600 border-t">
//               For any queries, contact us at: <span className="font-semibold">support@agfood.com</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X, Search, CheckCircle, XCircle, Clock, FileText } from "lucide-react";
// import { motion } from "framer-motion";
// import logoImage from "./assets/Logo.webp"; // Adjust path as needed

// export default function CheckStatus() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [passportNumber, setPassportNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleCheck = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const res = await fetch(`http://localhost:5000/api/check-status/${passportNumber}`);
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Application not found");
//         setLoading(false);
//         return;
//       }

//       setResult(data);
//       setLoading(false);

//       // ✅ If approved, redirect to offer letter page instead of PDF
//       if (data.status === "Approved") {
//         setTimeout(() => {
//           window.location.href = `/offer-letter?passport=${passportNumber}`;
//         }, 1000);
//       }

//     } catch (err) {
//       setError("Error checking status. Please try again.");
//       setLoading(false);
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Approved":
//         return <CheckCircle className="w-16 h-16 text-green-600" />;
//       case "Rejected":
//         return <XCircle className="w-16 h-16 text-red-600" />;
//       default:
//         return <Clock className="w-16 h-16 text-yellow-600" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Approved":
//         return "bg-green-100 text-green-800 border-green-300";
//       case "Rejected":
//         return "bg-red-100 text-red-800 border-red-300";
//       default:
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      
//       {/* ================= NAVBAR ================= */}
//       <nav className="bg-white shadow sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//           <img
//             src={logoImage}
//             alt="Logo"
//             className="w-14 cursor-pointer"
//             onClick={() => navigate("/")}
//           />

//           <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>

//           <div className="hidden lg:flex gap-6 items-center">
//             <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button>
//             <button onClick={() => navigate("/jobs")} className="hover:text-green-700">Jobs</button>
//             <button onClick={() => navigate("/apply")} className="hover:text-green-700">Apply Now</button>
//             <button className="font-bold text-green-700">Check Status</button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t p-4 space-y-2">
//             <button onClick={() => navigate("/")} className="block w-full text-left py-2">Home</button>
//             <button onClick={() => navigate("/jobs")} className="block w-full text-left py-2">Jobs</button>
//             <button onClick={() => navigate("/apply")} className="block w-full text-left py-2">Apply Now</button>
//             <button className="block w-full text-left py-2 font-bold text-green-700">Check Status</button>
//           </div>
//         )}
//       </nav>

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="flex justify-center items-center px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-2xl"
//         >
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
//             {/* Header */}
//             <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-10 px-6">
//               <Search className="w-16 h-16 mx-auto mb-4" />
//               <h1 className="text-3xl font-bold mb-2">Check Application Status</h1>
//               <p className="text-green-100">Enter your passport number to view your application status</p>
//             </div>

//             {/* Search Form */}
//             <div className="p-8">
//               <form onSubmit={handleCheck} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold mb-2 text-gray-700">
//                     Passport Number
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       required
//                       value={passportNumber}
//                       onChange={(e) => setPassportNumber(e.target.value.toUpperCase())}
//                       placeholder="Enter passport number (e.g., AB1234567)"
//                       className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-600 focus:outline-none"
//                     />
//                     <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Checking...
//                     </span>
//                   ) : (
//                     "Check Status"
//                   )}
//                 </button>
//               </form>

//               {/* Error Message */}
//               {error && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
//                 >
//                   <p className="text-red-700 font-medium text-center">{error}</p>
//                 </motion.div>
//               )}

//               {/* Result Display */}
//               {result && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-8 space-y-6"
//                 >
//                   {/* Status Badge */}
//                   <div className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-xl">
//                     {getStatusIcon(result.status)}
//                     <div className={`px-6 py-2 rounded-full border-2 font-bold text-lg ${getStatusColor(result.status)}`}>
//                       {result.status}
//                     </div>
//                   </div>

//                   {/* Applicant Details */}
//                   <div className="border-2 border-gray-200 rounded-xl p-6 space-y-4">
//                     <h3 className="font-bold text-lg text-gray-800 mb-4">Application Details</h3>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-600">Name</p>
//                         <p className="font-semibold text-gray-900">{result.name}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Email</p>
//                         <p className="font-semibold text-gray-900">{result.email}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Phone</p>
//                         <p className="font-semibold text-gray-900">{result.phone}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Country</p>
//                         <p className="font-semibold text-gray-900">{result.country}</p>
//                       </div>

//                       {/* ✅ JOB POSITION DISPLAY */}
//                       <div>
//                         <p className="text-sm text-gray-600">Job Position</p>
//                         <p className="font-semibold text-gray-900">{result.jobPosition || "N/A"}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Experience</p>
//                         <p className="font-semibold text-gray-900">{result.experience}</p>
//                       </div>
                      
//                       <div>
//                         <p className="text-sm text-gray-600">Applied On</p>
//                         <p className="font-semibold text-gray-900">
//                           {new Date(result.createdAt).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Approved Message & PDF Button */}
//                   {result.status === "Approved" && result.userId && (
//                     <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center space-y-4">
//                       <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
//                       <h3 className="text-xl font-bold text-green-800">
//                         Congratulations! Your application has been approved! 🎉
//                       </h3>
//                       <p className="text-green-700">
//                         Your job offer letter has been opened in a new tab. If it didn't open, click the button below.
//                       </p>
//                       <button
//                         onClick={() => window.open(`http://localhost:5000/api/users/${result.userId}/pdf`, '_blank')}
//                         className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-all"
//                       >
//                         <FileText className="w-5 h-5" />
//                         Download Offer Letter PDF
//                       </button>
//                     </div>
//                   )}

//                   {/* Pending Message */}
//                   {result.status === "Pending" && (
//                     <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
//                       <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
//                       <h3 className="text-lg font-bold text-yellow-800 mb-2">
//                         Application Under Review
//                       </h3>
//                       <p className="text-yellow-700">
//                         Your application is being reviewed by our team. Please check back later.
//                       </p>
//                     </div>
//                   )}

//                   {/* Rejected Message */}
//                   {result.status === "Rejected" && (
//                     <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
//                       <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
//                       <h3 className="text-lg font-bold text-red-800 mb-2">
//                         Application Not Approved
//                       </h3>
//                       <p className="text-red-700">
//                         Unfortunately, your application was not approved at this time. You may apply again after 30 days.
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>
//               )}
//             </div>

//             {/* Footer Note */}
//             <div className="bg-gray-50 text-center py-4 px-6 text-sm text-gray-600 border-t">
//               For any queries, contact us at: <span className="font-semibold">support@agfood.com</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Search, CheckCircle, XCircle, Clock, FileText, Download, Printer } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "./assets/Logo.webp";

export default function CheckStatus() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [passportNumber, setPassportNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const navigate = useNavigate();
  const downloadRef = useRef(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    setDownloading(false);

    try {
      const res = await fetch(`https://agfoodbackend-production.up.railway.app/api/check-status/${passportNumber}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Application not found");
        setLoading(false);
        return;
      }

      setResult(data);
      setLoading(false);

      // ✅ AUTOMATIC PDF DOWNLOAD IF APPROVED
      if (data.status === "Approved") {
        setDownloading(true);
        
        // Small delay for UX
        setTimeout(() => {
          triggerAutoDownload(passportNumber);
        }, 1500);
      }

    } catch (err) {
      setError("Error checking status. Please try again.");
      setLoading(false);
    }
  };

  // ✅ Function to trigger PDF download
  const triggerAutoDownload = (passport) => {
    const downloadUrl = `https://agfoodbackend-production.up.railway.app/api/generate-offer-pdf/${passport}`;
    
    // Create invisible iframe for download
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = downloadUrl;
    document.body.appendChild(iframe);
    
    // Also update the download link
    if (downloadRef.current) {
      downloadRef.current.href = downloadUrl;
      downloadRef.current.click();
    }
    
    // Remove iframe after some time
    setTimeout(() => {
      document.body.removeChild(iframe);
      setDownloading(false);
    }, 3000);
  };

  // ✅ Manual download function
  const handleManualDownload = () => {
    if (!passportNumber || !result) return;
    
    setDownloading(true);
    triggerAutoDownload(passportNumber);
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
            <button onClick={() => navigate("/apply-now")} className="hover:text-green-700">Apply Now</button>
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
                      placeholder="Enter passport number (e.g., C3497945)"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-green-600 focus:outline-none"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Checking...
                    </>
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
                        <p className="text-sm text-gray-600">Job Position</p>
                        <p className="font-semibold text-gray-900">{result.jobPosition || "Packing"}</p>
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
                      
                      <div>
                        <p className="text-sm text-gray-600">Status Updated</p>
                        <p className="font-semibold text-gray-900">
                          {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ✅ APPROVED STATUS - AUTO DOWNLOAD */}
                  {result.status === "Approved" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center space-y-4"
                    >
                      {/* Download Animation */}
                      {downloading && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md">
                            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">
                              📥 Downloading Offer Letter...
                            </h3>
                            <p className="text-gray-600">
                              Your job offer letter is being downloaded automatically.
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                              File: <strong>Job_Offer_{passportNumber}.pdf</strong>
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-center items-center gap-3">
                        <CheckCircle className="w-12 h-12 text-green-600 animate-bounce" />
                        <Download className="w-10 h-10 text-green-600 animate-pulse" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-green-800">
                        🎉 Congratulations! Your application has been approved!
                      </h3>
                      
                      <div className="space-y-3">
                        <p className="text-green-700 font-medium">
                          ✅ Your Job Offer Letter is downloading automatically...
                        </p>
                        
                        <div className="bg-white p-4 rounded-lg border border-green-300">
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>File Name:</strong> Job_Offer_{passportNumber}.pdf
                          </p>
                          <p className="text-sm text-gray-600">
                            <strong>File Size:</strong> ~500 KB | <strong>Format:</strong> PDF
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Hidden auto-download link */}
                        <a
                          ref={downloadRef}
                          href={`https://agfoodbackend-production.up.railway.app/api/generate-offer-pdf/${passportNumber}`}
                          download={`Job_Offer_${passportNumber}.pdf`}
                          className="hidden"
                        >
                          Download
                        </a>
                        
                        {/* Manual Download Button */}
                        <button
                          onClick={handleManualDownload}
                          disabled={downloading}
                          className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {downloading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5" />
                              Download Offer Letter
                            </>
                          )}
                        </button>
                        
                        {/* View Online Button */}
                        <button
                          onClick={() => window.open(`https://agfoodbackend-production.up.railway.app/offer-letter?passport=${passportNumber}`, '_blank')}
                          className="inline-flex items-center justify-center gap-2 bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-all"
                        >
                          <FileText className="w-5 h-5" />
                          View Online
                        </button>
                        
                        {/* Print Button */}
                        <button
                          onClick={() => window.print()}
                          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                        >
                          <Printer className="w-5 h-5" />
                          Print Status
                        </button>
                      </div>
                      
                      <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                        <h4 className="font-bold text-gray-800 mb-2">📋 Important Notes:</h4>
                        <ul className="text-sm text-gray-600 text-left space-y-1">
                          <li>• Save the PDF file for visa processing</li>
                          <li>• Print 2 copies for documentation</li>
                          <li>• Contact HR at +1 343 501 3133 for queries</li>
                          <li>• Offer valid for 90 days from today</li>
                        </ul>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        <p>Application ID: {result._id?.substring(0, 8) || passportNumber} | 
                           Generated: {new Date().toLocaleString()}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Pending Status */}
                  {result.status === "Pending" && (
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                      <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3 animate-pulse" />
                      <h3 className="text-lg font-bold text-yellow-800 mb-2">
                        Application Under Review
                      </h3>
                      <p className="text-yellow-700">
                        Your application is being reviewed by our team. Please check back in 3-5 working days.
                      </p>
                      <button
                        onClick={() => navigate("/contact")}
                        className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all"
                      >
                        Contact Support
                      </button>
                    </div>
                  )}

                  {/* Rejected Status */}
                  {result.status === "Rejected" && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                      <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-red-800 mb-2">
                        Application Not Approved
                      </h3>
                      <p className="text-red-700 mb-3">
                        Unfortunately, your application was not approved at this time.
                      </p>
                      <button
                        onClick={() => navigate("/apply")}
                        className="mt-2 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
                      >
                        Apply Again
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 text-center py-4 px-6 text-sm text-gray-600 border-t">
              <p>For any queries, contact us at: <span className="font-semibold">support@agfood.com</span></p>
              <p className="mt-1 text-xs">HR Contact: +1 (343) 501-3133 | +44 7441 929399</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}