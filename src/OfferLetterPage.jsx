import React, { useState, useEffect } from 'react';
import { Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
import profile from './assets/profile.jpg';
import jsPDF from "jspdf";
import stampApproved from './assets/approvedStmp.jpg';
import stampApproved2 from './assets/approvedStmp.jpg';
import flag from './assets/flag.png';
import agFoods from './assets/AGFood.png';

export default function OfferLetterPage() {
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [generatingProfile, setGeneratingProfile] = useState(false);

  const getPassportFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('passport') || 'AS1231233';
  };

  const passportNumber = getPassportFromURL();

  useEffect(() => {
    fetchApplicationData();
    generateQRCode();
  }, []);

  const getBase64Image = async (imgSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imgSrc;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => {
        console.log('Failed to load image:', imgSrc);
        resolve(null);
      };
    });
  };

  const fetchApplicationData = async () => {
    try {
      // const res = await fetch(`https://agfoodbackend-production.up.railway.app/api/check-status/${passportNumber}`);
      const res = await fetch(`https://adminag-production.up.railway.app/api/check-status/${passportNumber}`);
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

  // const handleDownload = () => {
  //   window.location.href = `https://agfoodbackend-production.up.railway.app/api/generate-offer-pdf/${passportNumber}`;
  // };

  const generatePDF = async (user) => {
    // const { jsPDF } = window.jspdf;

    // if (!jsPDF) {
    //     alert("PDF library not loaded. Please try again.");
    //     return;
    // }

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 20;

    // Colors - Only red color
    const redColor = [237, 28, 36];

    // For now, use URLs. Replace with your imported images later
    const stamp01 = `${stampApproved}`;//'https://cdn-icons-png.flaticon.com/512/1828/1828640.png';
    const stamp02 = `${stampApproved2}`;//'https://cdn-icons-png.flaticon.com/512/3067/3067257.png';
    const canadaFlag = `${flag}`;//'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png';
    const agFoodsLogo = `${agFoods}` //'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';

    // Function to add images
    const addImage = async (imgUrl, x, y, width, height) => {
      try {
        const base64Img = await getBase64Image(imgUrl);
        if (base64Img) {
          doc.addImage(base64Img, 'PNG', x, y, width, height);
        }
      } catch (error) {
        console.log('Image loading error:', error);
      }
    };

    // Page 1 (Job Offer Letter)
    // Top border design - RED ONLY
    doc.setFillColor(...redColor);
    doc.rect(0, 0, pageWidth, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CANADA", pageWidth / 2, 10, { align: 'center' });

    // Canada flag image
    await addImage(canadaFlag, 25, 22, 15, 10);

    // AG Foods logo
    await addImage(agFoodsLogo, pageWidth - 45, 20, 30, 15);

    // Profile picture
    const profilePicUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&size=200`;
    await addImage(profilePicUrl, pageWidth - 65, 40, 40, 40);

    // Generate QR Code for profile
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=https://www.google.com/search?q=${encodeURIComponent(user.name)}`;
    await addImage(qrCodeUrl, pageWidth - 70, 85, 15, 15);

    // Schedule 1 Header
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("SCHEDULE 1", pageWidth / 2, 45, { align: 'center' });
    doc.text("JOB OFFER LETTER", pageWidth / 2, 51, { align: 'center' });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("BETWEEN", pageWidth / 2, 57, { align: 'center' });
    doc.setFont("helvetica", "bold");
    doc.text("MEINHARDT FINE FOODS", pageWidth / 2, 62, { align: 'center' });
    doc.setFont("helvetica", "normal");
    doc.text("AND", pageWidth / 2, 68, { align: 'center' });

    // Employee name with underline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    const nameY = 75;
    const nameText = `${user.name}masloon22-12-2025`;
    doc.text(nameText, pageWidth / 2, nameY, { align: 'center' });
    doc.line(pageWidth / 2 - 50, nameY + 1, pageWidth / 2 + 50, nameY + 1);

    // Employee details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(user.name.toUpperCase(), pageWidth / 2, 82, { align: 'center' });
    doc.text("Having Nationality of PAK", pageWidth / 2, 87, { align: 'center' });

    // Passport number
    doc.setFont("helvetica", "bold");
    doc.text(`PASSPORT NUMBER-${passportNumber}`, pageWidth / 2, 95, { align: 'center' });

    // Job details with bold and underline
    let y = 105;

    // JOB TITLE AND PLACE OF WORK - Bold and Underline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    const jobTitleText = "1.  JOB TITLE AND PLACE OF WORK";
    doc.text(jobTitleText, margin, y);
    // Underline
    const textWidth = doc.getTextWidth(jobTitleText);
    doc.line(margin, y + 0.5, margin + textWidth, y + 0.5);

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text(`You Will employed in the position of ${user?.jobPosition || 'Food Packer'} Your normal place of Work Will`, margin + 5, y);
    y += 4;
    doc.text("be  CANADA MEINHARDT FINE FOODS", margin + 5, y);

    y += 8;
    // CONTRACT TERM - Bold and Underline
    doc.setFont("helvetica", "bold");
    const contractTermText = "2.  CONTRACT TERM";
    doc.text(contractTermText, margin, y);
    const contractTextWidth = doc.getTextWidth(contractTermText);
    doc.line(margin, y + 0.5, margin + contractTextWidth, y + 0.5);

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("The term of this contract shall be limited or unlimited and Company shall employ you commencing", margin + 5, y);
    y += 4;
    doc.text("on or around the 1st September 2025.", margin + 5, y);

    y += 8;
    // REMUNERATION - Bold and Underline
    doc.setFont("helvetica", "bold");
    const remunerationText = "3.  REMUNERATION";
    doc.text(remunerationText, margin, y);
    const remunerationTextWidth = doc.getTextWidth(remunerationText);
    doc.line(margin, y + 0.5, margin + remunerationTextWidth, y + 0.5);

    // Remuneration table
    y += 5;
    const tableData = [
      ["Gross Salary", "3500$Canadian Dollars"],
      ["Period of contract", "2 Year's renewable"],
      ["Accommodations", "Provided by the company"],
      ["Meal allowance", "Provided by the company"],
      ["Transportation Allowance", "Provided by the company"],
      ["Food", "In accordance to Canadian labour Laws"],
      ["Medical / Insurance", "In accordance to Canadian labour Laws"],
      ["Leave Benefits", "In accordance Canadian labour Law"],
      ["Over Time", "As per law"]
    ];

    const startX = margin + 5;
    const col1Width = 60;
    const col2Width = 70;
    const rowHeight = 6;

    tableData.forEach((row, i) => {
      doc.text(row[0], startX, y);
      doc.text(row[1], startX + col1Width, y);
      y += rowHeight;
    });

    // Hours of work - Bold and Underline
    y += 5;
    doc.setFont("helvetica", "bold");
    const hoursTextTitle = "4.  Hours of Work";
    doc.text(hoursTextTitle, margin, y);
    const hoursTextWidth = doc.getTextWidth(hoursTextTitle);
    doc.line(margin, y + 0.5, margin + hoursTextWidth, y + 0.5);

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);

    const hoursText = user?.description || "Your hours shall be eight (8) hours per day up to 6 days per week. With a one (1) hour lunch break, you are however expected to work such hours As may be necessary to adequately perform your duties.";
    const splitHours = doc.splitTextToSize(hoursText, pageWidth - 2 * margin);
    doc.text(splitHours, margin, y);
    y += splitHours.length * 4;

    // Signature area with approve stamps
    y = pageHeight - 60;

    // Left side - stamp01
    await addImage(stamp01, margin, y - 20, 25, 25);

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("SIGNATURE__________", margin + 35, y);
    y += 5;
    doc.text("THUMB", margin + 35, y);

    // Right side - stamp02
    await addImage(stamp02, pageWidth - margin - 60, y - 25, 25, 25);

    doc.text("SIGNATURE__________", pageWidth - margin - 80, y);
    y -= 5;
    doc.text("THUMB", pageWidth - margin - 80, y);

    // Bottom border - RED ONLY
    doc.setFillColor(...redColor);
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CANADA", pageWidth / 2, pageHeight - 7, { align: 'center' });

    // Page 2 (Terms and Conditions)
    doc.addPage();

    // Top border design - RED ONLY
    doc.setFillColor(...redColor);
    doc.rect(0, 0, pageWidth, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CANADA", pageWidth / 2, 10, { align: 'center' });

    // Canada flag image
    await addImage(canadaFlag, 25, 20, 15, 10);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text("CANADA", 42, 25);

    // AG Foods logo
    await addImage(agFoodsLogo, pageWidth - 45, 25, 30, 15);

    // Header right
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("3202 Garanville ST Vascuver", pageWidth - 70, 18);
    doc.text("BC V6H 3R8 CANADA", pageWidth - 70, 22);

    // Main content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");

    let y2 = 50;

    // (6) Non-Competition and Confidentiality - Bold and Underline
    const nonCompText = "(6) Non-Competition and Confidentiality";
    doc.text(nonCompText, margin, y2);
    const nonCompWidth = doc.getTextWidth(nonCompText);
    doc.line(margin, y2 + 0.5, margin + nonCompWidth, y2 + 0.5);

    y2 += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const text1 = "In the employment or any time thereafter you are not permitted to access any confidential information that is the property of the Employer. You are not permitted to disclose this information outside the Company.";
    const splitText1 = doc.splitTextToSize(text1, pageWidth - 2 * margin);
    doc.text(splitText1, margin, y2);
    y2 += splitText1.length * 5;

    y2 += 3;
    const text2 = "During your time of Employment with the Employer, you may not engage in any work for another Employer that is related or in competition with the Company. You will fully disclose to your Employer any other Employment relationships you have and you will promptly notify the employer should other employment provide that job is close to or shares from your duties fulfill your duties: and (b) you are not entering another organization in competing with the employer.";
    const splitText2 = doc.splitTextToSize(text2, pageWidth - 2 * margin);
    doc.text(splitText2, margin, y2);
    y2 += splitText2.length * 5;

    y2 += 3;
    const text3 = "It is further acknowledged that this information is proprietary or confidential in nature and you will not disclose this information to any of the Employer's clients for a period of at least 03 Years.";
    const splitText3 = doc.splitTextToSize(text3, pageWidth - 2 * margin);
    doc.text(splitText3, margin, y2);
    y2 += splitText3.length * 5;

    y2 += 8;
    // (6) Entirety - Bold and Underline
    doc.setFont("helvetica", "bold");
    const entiretyText = "(6) Entirety";
    doc.text(entiretyText, margin, y2);
    const entiretyWidth = doc.getTextWidth(entiretyText);
    doc.line(margin, y2 + 0.5, margin + entiretyWidth, y2 + 0.5);

    y2 += 6;
    doc.setFont("helvetica", "normal");
    const text4 = "This contract represents the entire agreement between the two parties and supercedes any previous written or oral agreement. This agreement may be modified at any time provided the written consent of both the Employer and the Employee.";
    const splitText4 = doc.splitTextToSize(text4, pageWidth - 2 * margin);
    doc.text(splitText4, margin, y2);
    y2 += splitText4.length * 5;

    y2 += 8;
    // (7) Legal Authorization - Bold and Underline
    doc.setFont("helvetica", "bold");
    const legalAuthText = "(7) Legal Authorization";
    doc.text(legalAuthText, margin, y2);
    const legalAuthWidth = doc.getTextWidth(legalAuthText);
    doc.line(margin, y2 + 0.5, margin + legalAuthWidth, y2 + 0.5);

    y2 += 6;
    doc.setFont("helvetica", "normal");
    const text5 = "The Employee agrees that he or she shall be authorized to work in MEINHARDT FINE FOODS and can provide proof of this with legal documentation. This documentation will be obtain by the Employer for legal records.";
    const splitText5 = doc.splitTextToSize(text5, pageWidth - 2 * margin);
    doc.text(splitText5, margin, y2);
    y2 += splitText5.length * 5;

    y2 += 8;
    // (8) Severability - Bold and Underline
    doc.setFont("helvetica", "bold");
    const severabilityText = "(8) Severability";
    doc.text(severabilityText, margin, y2);
    const severabilityWidth = doc.getTextWidth(severabilityText);
    doc.line(margin, y2 + 0.5, margin + severabilityWidth, y2 + 0.5);

    y2 += 6;
    doc.setFont("helvetica", "normal");
    const text6 = "The parties agreed that, if any portion of this contract is found to be void or unenforceable, it shall be struck from the contract and the remaining provisions of the contract shall remain valid and enforceable.";
    const splitText6 = doc.splitTextToSize(text6, pageWidth - 2 * margin);
    doc.text(splitText6, margin, y2);
    y2 += splitText6.length * 5;

    y2 += 8;
    // (8) Jurisdiction - Bold and Underline
    doc.setFont("helvetica", "bold");
    const jurisdictionText = "(8) Jurisdiction";
    doc.text(jurisdictionText, margin, y2);
    const jurisdictionWidth = doc.getTextWidth(jurisdictionText);
    doc.line(margin, y2 + 0.5, margin + jurisdictionWidth, y2 + 0.5);

    y2 += 6;
    doc.setFont("helvetica", "normal");
    const text7 = "This contract shall be governed, interpreted and construed in accordance with the laws of MEINHARDT FINE FOODS. In return and you agree that the Employer the Employee has executed this contract in the appropriate through the authorization of official agent and with the consent of the Employee given here in writing.";
    const splitText7 = doc.splitTextToSize(text7, pageWidth - 2 * margin);
    doc.text(splitText7, margin, y2);
    y2 += splitText7.length * 5;

    // Signatures
    y2 += 15;
    doc.setFontSize(8);
    doc.text("General Manager Signature", margin + 10, y2);
    doc.text("Employment signature", pageWidth - margin - 50, y2);

    y2 += 8;
    doc.setFont("helvetica", "bold");
    doc.text("Grayson Jackson", margin + 10, y2);

    // Bottom border - RED ONLY
    doc.setFillColor(...redColor);
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("CANADA", pageWidth / 2, pageHeight - 7, { align: 'center' });

    // Save PDF
    doc.save(`${user.name.replace(/\s+/g, '_')}_JobOffer.pdf`);
  };
  const handlePrint = () => {
    window.print();
  };

  const getApplicationUrl = async() => {
   try {
    const response = await fetch(`https://agfoodbackend-production.up.railway.app/applications`);
    const url = await response.json();
    const filtered = url.find(app => app.passportNumber === passportNumber);
    setGeneratingProfile(filtered?.profilePictureURL || '');
    console.log('Generated Application URL:', url, filtered?.profilePictureURL);
   } catch (error) {
    console.error('Error generating application URL:', error);
   }
  }

  useEffect(() => {
    getApplicationUrl();
  }, []);
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
console.log('Application Data:', applicationData, applicationData.profilePictureURL,applicationData?.photoURL);
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
          onClick={() => generatePDF(applicationData)}
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
                <img
                src={profile}
                 // src={`https://agfoodbackend-production.up.railway.app/${generatingProfile}` ?? profile}
                  // src={`https://agfoodbackend-production.up.railway.app/${applicationData?.profilePictureURL}`}
                  alt="Applicant" className="w-full h-full object-cover rounded-lg" />
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