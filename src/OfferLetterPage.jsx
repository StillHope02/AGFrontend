// import React, { useState, useEffect } from 'react';
// import { Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
// import profile from './assets/profile.jpg';

// export default function OfferLetterPage() {
//   const [applicationData, setApplicationData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Get passport number from URL
//   const getPassportFromURL = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get('passport') || 'AS1231233';
//   };

//   const passportNumber = getPassportFromURL();

//   useEffect(() => {
//     fetchApplicationData();
//   }, []);

//   const fetchApplicationData = async () => {
//     try {
//       const res = await fetch(`https://agfoodbackend-production.up.railway.app/api/check-status/${'AS1231233'}`);
//       const data = await res.json();
// console.log(data);
//       if (!res.ok) {
//         setError('Application not found');
//         setLoading(false);
//         return;
//       }

//       setApplicationData(data);
//       setLoading(false);
//     } catch (err) {
//       setError('Error loading application');
//       setLoading(false);
//     }
//   };

//   const handleDownload = () => {
//     window.location.href = `https://agfoodbackend-production.up.railway.app/api/generate-offer-pdf/${passportNumber}`;
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 font-semibold">Loading Offer Letter...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !applicationData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
//           <p className="text-gray-600">{error || 'Application not found'}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       {/* Action Buttons - Print/Download */}
//       {/* <div className="max-w-5xl mx-auto mb-6 flex justify-end gap-4 print:hidden">
//         <button
//           onClick={handlePrint}
//           className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
//         >
//           <Printer className="w-5 h-5" />
//           Print Letter
//         </button>
//         <button
//           onClick={handleDownload}
//           className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
//         >
//           <Download className="w-5 h-5" />
//           Download PDF
//         </button>
//       </div> */}

//       {/* Main Offer Letter Container */}
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        
//         {/* Header with Logo and Company Info */}
//         <div className="bg-gradient-to-r from-green-900 to-green-800 text-white p-8 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
//           <div className="relative z-10 flex items-start justify-between">
//             {/* Logo and Company Name */}
//             <div className="flex items-center gap-4">
//               <div className="bg-white p-3 rounded-lg">
//                 <div className="text-4xl">🍁</div>
//               </div>
//               <div>
//                 <div className="bg-green-700 px-4 py-2 rounded-md inline-block mb-2">
//                   <h1 className="text-2xl font-bold">AG Foods</h1>
//                 </div>
//                 {/* <p className="text-green-200 text-sm">Foods Inc.</p> */}
//               </div>
//             </div>

//             {/* Applicant Photo Placeholder */}
//             <div className="bg-white w-24 h-28 rounded-lg flex items-center justify-center text-4xl">
//               <img src={profile} alt="Applicant" className="w-full h-full object-cover rounded-lg" />
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <h2 className="text-3xl font-bold mb-2">AG Foods</h2>
//             <p className="text-green-200 text-sm">
//               AG Foods Inc.'s headquarters: 6897 Mississauga, Ontario Canada
//             </p>
//             <div className="flex items-center justify-center gap-2 mt-3">
//               <Phone className="w-4 h-4" />
//               <span className="text-sm">WhatsApp: +1 (782) 510-0391</span>
//             </div>
//           </div>
//         </div>

//         {/* Personal Information Section */}
//         <div className="p-8 bg-gray-50 border-b-2 border-gray-200">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">REF NO:</p>
//               <p className="text-lg font-bold text-gray-800">Br717</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">JOIN DATE:</p>
//               <p className="text-lg font-bold text-gray-800">
//                 {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">NAME:</p>
//               <p className="text-lg font-bold text-gray-800">{applicationData.name}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">PASSPORT NO:</p>
//               <p className="text-lg font-bold text-gray-800">{passportNumber}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">EMAIL:</p>
//               <p className="text-lg font-bold text-gray-800">{applicationData.email}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">PHONE NO:</p>
//               <p className="text-lg font-bold text-gray-800">{applicationData.phone}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-600 font-semibold">Nationality:</p>
//               <p className="text-lg font-bold text-gray-800">{applicationData.country}</p>
//             </div>
//           </div>
//         </div>

//         {/* Job Offer Title */}
//         <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 text-center border-b-2 border-red-200">
//           <h2 className="text-3xl font-bold text-gray-800">
//             LETTER OF AGREEMENT / WORK PERMIT APPROVAL LETTER
//           </h2>
//         </div>

//         {/* Offer Content */}
//         <div className="p-8">
//           <p className="text-gray-700 leading-relaxed mb-6">
//             We are pleased to inform you that we have selected you for the profile of the below-mentioned job for regular full-time post with our company <strong>Maple Leaf Foods Inc.</strong> in 6897 Mississauga, Ontario Canada. The details of our offer including terms and conditions are listed in this offer of appointment.
//           </p>

//           {/* Job Details Table */}
//           <div className="overflow-hidden rounded-lg border-2 border-gray-200 mb-6">
//             <table className="w-full">
//               <tbody>
//                 <tr className="bg-gradient-to-r from-red-100 to-pink-100">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white w-1/3">Job Profile</td>
//                   <td className="p-4 text-gray-800">{applicationData.jobPosition || 'Food packing'}</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-50 to-pink-50">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Salary</td>
//                   <td className="p-4 text-gray-800">4500.00$ /month USD</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-100 to-pink-100">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Working Hours</td>
//                   <td className="p-4 text-gray-800">48 Hours in a week, 6 days in a week, 8 Hours</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-50 to-pink-50">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Food Provided</td>
//                   <td className="p-4 text-gray-800">YES</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-100 to-pink-100">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Accommodation Provided</td>
//                   <td className="p-4 text-gray-800">Company provided</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-50 to-pink-50">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Contract Period</td>
//                   <td className="p-4 text-gray-800">2 YEARS</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-100 to-pink-100">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Probation Period</td>
//                   <td className="p-4 text-gray-800">30 DAYS</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-50 to-pink-50">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Joining Date</td>
//                   <td className="p-4 text-gray-800">
//                     {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
//                   </td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-100 to-pink-100">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Contact Info</td>
//                   <td className="p-4 text-gray-800">+1 (782) 510-0391</td>
//                 </tr>
//                 <tr className="bg-gradient-to-r from-red-50 to-pink-50">
//                   <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Email</td>
//                   <td className="p-4 text-gray-800">agfoods@gmail.com</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Employment Agreement Section */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Employment Agreement</h3>
//             <p className="text-gray-700 font-semibold mb-2">To the Consulate of Canada</p>
//             <p className="text-gray-700 mb-4">
//               <strong>Subject:</strong> Hiring of Foreign National Worker (overseas) LMIA approval Reference No.: TW8816
//             </p>
//             <p className="text-gray-700 mb-6">
//               This Employment Agreement (the "Agreement") is made and effective this month 2025
//             </p>

//             <p className="text-gray-700 mb-4">
//               <strong>AND:</strong> Maple Leaf Foods Inc., organized and existing under the laws of the Quebec Province of Canada, with its head office located at: 6897 Mississauga, Ontario Canada.
//             </p>

//             {/* Agreement Sections */}
//             <div className="space-y-6">
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">1. RECITALS</h4>
//                 <p className="text-gray-700">
//                   In consideration of the covenants and agreements herein contained and the monies to be paid hereunder, the Corporation hereby employs the Employee and the Employee hereby agrees to perform services as an employee of the Corporation, on an "at will" basis, upon the following terms and conditions:
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">2. APPOINTMENT</h4>
//                 <p className="text-gray-700">
//                   The Employee is hereby employed by the Corporation to render such services and to perform such tasks as may be assigned by the Corporation. The Corporation may, in its sole discretion, increase or reduce the duties or modify the job description of the Employee from time to time, and any such increase, reduction or modification shall not be deemed a termination of this Agreement.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">3. ACCEPTANCE OF EMPLOYMENT</h4>
//                 <p className="text-gray-700">
//                   A copy of the employment letter was sent to the Employee, and the Employee accepts employment with the Corporation upon the terms set forth in that letter and agrees to devote all Employee's time, energy, and ability to the interests of the Corporation, and to perform Employee's duties in an efficient, trustworthy, and business-like manner.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">4. DEVOTION OF TIME TO EMPLOYMENT</h4>
//                 <p className="text-gray-700">
//                   During the term of Employee's employment, Employee shall devote all of Employee's business time to the business and interests.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Footer Section with Employee Details */}
//           <div className="mt-12 p-6 bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <div className="bg-red-600 w-16 h-20 rounded flex items-center justify-center">
//                   <div className="text-white text-3xl">🇨🇦</div>
//                 </div>
//                 <div>
//                   <p className="font-bold text-lg">{applicationData.name}</p>
//                   <p className="text-blue-200 text-sm">{applicationData.phone}</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-bold">Full Name: <span className="font-normal">{applicationData.name}</span></p>
//                 <p className="font-bold">Nationality: <span className="font-normal">{applicationData.country}</span></p>
//                 <p className="font-bold">Tracking No: <span className="font-normal">{passportNumber}</span></p>
//                 <p className="font-bold">Email Address: <span className="font-normal text-sm">{applicationData.email}</span></p>
//               </div>
//             </div>
//           </div>

//           {/* Work Permit Status */}
//           <div className="mt-6 overflow-hidden rounded-lg border-2 border-gray-200">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-4 text-left font-bold text-gray-800 border-r">Tax Name</th>
//                   <th className="p-4 text-left font-bold text-gray-800 border-r">Price (USD$)</th>
//                   <th className="p-4 text-left font-bold text-gray-800">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="p-4 border-r">Work Permit</td>
//                   <td className="p-4 border-r">100.00$ USD</td>
//                   <td className="p-4">
//                     <span className="bg-red-600 text-white px-4 py-2 rounded font-bold">paid</span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Agreement Image Placeholder */}
//           {/* <div className="mt-8 text-center">
//             <div className="inline-block border-4 border-gray-300 rounded-lg p-4 bg-gray-50">
//               <p className="text-gray-600 font-semibold mb-2">📄 Official Agreement Document</p>
//               <div className="w-64 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded flex items-center justify-center">
//                 <p className="text-gray-500 text-sm">Employment Agreement Seal</p>
//               </div>
//             </div>
//           </div> */}
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-800 text-white text-center py-4">
//           <p className="text-sm">© 2025 mapleleaffoods. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
import profile from './assets/profile.jpg';

export default function OfferLetterPage() {
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const getPassportFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('passport') || 'AS1231233';
  };

  const passportNumber = getPassportFromURL();

  useEffect(() => {
    fetchApplicationData();
    generateQRCode();
  }, []);

  const fetchApplicationData = async () => {
    try {
      const res = await fetch(`https://agfoodbackend-production.up.railway.app/api/check-status/${passportNumber}`);
      const data = await res.json();

      if (!res.ok) {
        setError('Application not found');
        setLoading(false);
        return;
      }

      setApplicationData(data);
      setLoading(false);
    } catch (err) {
      setError('Error loading application');
      setLoading(false);
    }
  };

  const generateQRCode = () => {
    // Generate QR code that links to Google Chrome download
    const chromeUrl = 'https://www.google.com/chrome/';
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(chromeUrl)}`;
    setQrCodeUrl(qrApiUrl);
  };

  const handleDownload = () => {
    window.location.href = `https://agfoodbackend-production.up.railway.app/api/generate-offer-pdf/${passportNumber}`;
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading Offer Letter...</p>
        </div>
      </div>
    );
  }

  if (error || !applicationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Application not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Action Buttons */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-end gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
        >
          <Printer className="w-5 h-5" />
          Print Letter
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>

      {/* Main Offer Letter Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        
        {/* Header with Logo and Company Info */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10 flex items-start justify-between">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <div className="text-4xl">🍁</div>
              </div>
              <div>
                <div className="bg-green-700 px-4 py-2 rounded-md inline-block mb-2">
                  <h1 className="text-2xl font-bold">AG Foods</h1>
                </div>
              </div>
            </div>

            {/* Applicant Photo with QR Code */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white w-24 h-28 rounded-lg flex items-center justify-center text-4xl overflow-hidden">
                {/* <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl">
                  👤
                </div> */}
                 <img src={profile} alt="Applicant" className="w-full h-full object-cover rounded-lg" />
              </div>
              
              {/* QR Code */}
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img 
                  src={qrCodeUrl} 
                  alt="Scan to open in Chrome" 
                  className="w-24 h-24"
                />
                <p className="text-xs text-center mt-1 text-gray-700 font-medium">Scan for Chrome</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold mb-2">AG Foods</h2>
            <p className="text-green-200 text-sm">
              AG Foods Inc.'s headquarters: 6897 Mississauga, Ontario Canada
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Phone className="w-4 h-4" />
              <span className="text-sm">WhatsApp: +1 (782) 510-0391</span>
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="p-8 bg-gray-50 border-b-2 border-gray-200">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 font-semibold">REF NO:</p>
              <p className="text-lg font-bold text-gray-800">Br717</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">JOIN DATE:</p>
              <p className="text-lg font-bold text-gray-800">
                {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">NAME:</p>
              <p className="text-lg font-bold text-gray-800">{applicationData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">PASSPORT NO:</p>
              <p className="text-lg font-bold text-gray-800">{passportNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">EMAIL:</p>
              <p className="text-lg font-bold text-gray-800">{applicationData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">PHONE NO:</p>
              <p className="text-lg font-bold text-gray-800">{applicationData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">Nationality:</p>
              <p className="text-lg font-bold text-gray-800">{applicationData.country}</p>
            </div>
          </div>
        </div>

        {/* Job Offer Title */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 text-center border-b-2 border-red-200">
          <h2 className="text-3xl font-bold text-gray-800">
            LETTER OF AGREEMENT / WORK PERMIT APPROVAL LETTER
          </h2>
        </div>

        {/* Offer Content */}
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            We are pleased to inform you that we have selected you for the profile of the below-mentioned job for regular full-time post with our company <strong>Maple Leaf Foods Inc.</strong> in 6897 Mississauga, Ontario Canada. The details of our offer including terms and conditions are listed in this offer of appointment.
          </p>

          {/* Job Details Table */}
          <div className="overflow-hidden rounded-lg border-2 border-gray-200 mb-6">
            <table className="w-full">
              <tbody>
                <tr className="bg-gradient-to-r from-red-100 to-pink-100">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white w-1/3">Job Profile</td>
                  <td className="p-4 text-gray-800">{applicationData.jobPosition || 'Food packing'}</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Salary</td>
                  <td className="p-4 text-gray-800">4500.00$ /month USD</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-100 to-pink-100">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Working Hours</td>
                  <td className="p-4 text-gray-800">48 Hours in a week, 6 days in a week, 8 Hours</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Food Provided</td>
                  <td className="p-4 text-gray-800">YES</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-100 to-pink-100">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Accommodation Provided</td>
                  <td className="p-4 text-gray-800">Company provided</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Contract Period</td>
                  <td className="p-4 text-gray-800">2 YEARS</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-100 to-pink-100">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Probation Period</td>
                  <td className="p-4 text-gray-800">30 DAYS</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Joining Date</td>
                  <td className="p-4 text-gray-800">
                    {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-red-100 to-pink-100">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Contact Info</td>
                  <td className="p-4 text-gray-800">+1 (782) 510-0391</td>
                </tr>
                <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800 border-r-2 border-white">Email</td>
                  <td className="p-4 text-gray-800">agfoods@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Employment Agreement Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Employment Agreement</h3>
            <p className="text-gray-700 font-semibold mb-2">To the Consulate of Canada</p>
            <p className="text-gray-700 mb-4">
              <strong>Subject:</strong> Hiring of Foreign National Worker (overseas) LMIA approval Reference No.: TW8816
            </p>
            <p className="text-gray-700 mb-6">
              This Employment Agreement (the "Agreement") is made and effective this month 2025
            </p>

            <p className="text-gray-700 mb-4">
              <strong>AND:</strong> Maple Leaf Foods Inc., organized and existing under the laws of the Quebec Province of Canada, with its head office located at: 6897 Mississauga, Ontario Canada.
            </p>

            {/* Agreement Sections */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">1. RECITALS</h4>
                <p className="text-gray-700">
                  In consideration of the covenants and agreements herein contained and the monies to be paid hereunder, the Corporation hereby employs the Employee and the Employee hereby agrees to perform services as an employee of the Corporation, on an "at will" basis, upon the following terms and conditions:
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">2. APPOINTMENT</h4>
                <p className="text-gray-700">
                  The Employee is hereby employed by the Corporation to render such services and to perform such tasks as may be assigned by the Corporation. The Corporation may, in its sole discretion, increase or reduce the duties or modify the job description of the Employee from time to time, and any such increase, reduction or modification shall not be deemed a termination of this Agreement.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">3. ACCEPTANCE OF EMPLOYMENT</h4>
                <p className="text-gray-700">
                  A copy of the employment letter was sent to the Employee, and the Employee accepts employment with the Corporation upon the terms set forth in that letter and agrees to devote all Employee's time, energy, and ability to the interests of the Corporation, and to perform Employee's duties in an efficient, trustworthy, and business-like manner.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">4. DEVOTION OF TIME TO EMPLOYMENT</h4>
                <p className="text-gray-700">
                  During the term of Employee's employment, Employee shall devote all of Employee's business time to the business and interests.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Section with Employee Details */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 w-16 h-20 rounded flex items-center justify-center">
                  <div className="text-white text-3xl">🇨🇦</div>
                </div>
                <div>
                  <p className="font-bold text-lg">{applicationData.name}</p>
                  <p className="text-blue-200 text-sm">{applicationData.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">Full Name: <span className="font-normal">{applicationData.name}</span></p>
                <p className="font-bold">Nationality: <span className="font-normal">{applicationData.country}</span></p>
                <p className="font-bold">Tracking No: <span className="font-normal">{passportNumber}</span></p>
                <p className="font-bold">Email Address: <span className="font-normal text-sm">{applicationData.email}</span></p>
              </div>
            </div>
          </div>

          {/* Work Permit Status */}
          <div className="mt-6 overflow-hidden rounded-lg border-2 border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold text-gray-800 border-r">Tax Name</th>
                  <th className="p-4 text-left font-bold text-gray-800 border-r">Price (USD$)</th>
                  <th className="p-4 text-left font-bold text-gray-800">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-r">Work Permit</td>
                  <td className="p-4 border-r">100.00$ USD</td>
                  <td className="p-4">
                    <span className="bg-red-600 text-white px-4 py-2 rounded font-bold">paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white text-center py-4">
          <p className="text-sm">© 2025 mapleleaffoods. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}