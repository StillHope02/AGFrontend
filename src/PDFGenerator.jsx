// import React, { useRef, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import { motion } from 'framer-motion';
// import { Download, X } from 'lucide-react';

// const PDFGenerator = ({ user, isOpen, onClose }) => {
//   const pdfRef = useRef(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   const generatePDF = async () => {
//     if (!pdfRef.current || !user) return;
    
//     setIsGenerating(true);
    
//     try {
//       const canvas = await html2canvas(pdfRef.current, {
//         scale: 2,
//         useCORS: true,
//         logging: false,
//         backgroundColor: '#ffffff'
//       });
      
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       const imgWidth = 210; // A4 width in mm
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
//       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//       pdf.save(`Job_Offer_${user.fullName.replace(/\s+/g, '_')}.pdf`);
      
//     } catch (error) {
//       console.error('PDF generation error:', error);
//       alert('Error generating PDF');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   if (!isOpen || !user) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
//       >
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Job Offer Letter</h2>
//             <p className="text-gray-600">For: {user.fullName}</p>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={generatePDF}
//               disabled={isGenerating}
//               className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md"
//             >
//               {isGenerating ? (
//                 <>
//                   <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                   Generating...
//                 </>
//               ) : (
//                 <>
//                   <Download size={20} />
//                   Download PDF
//                 </>
//               )}
//             </button>
//             <button
//               onClick={onClose}
//               className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg transition-colors"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>

//         {/* PDF Preview */}
//         <div className="flex-1 overflow-auto p-8">
//           <div ref={pdfRef} className="bg-white p-8 border border-gray-300 max-w-3xl mx-auto relative">
//             {/* Header */}
//             <div className="text-center mb-8 border-b pb-6">
//               <h1 className="text-3xl font-bold text-green-900 mb-2">
//                 CANADIAN IMMIGRATION CONSULTANCY
//               </h1>
//               <p className="text-xl font-semibold text-gray-800">
//                 JOB OFFER AND AGREEMENT LETTER
//               </p>
//             </div>

//             {/* Date */}
//             <div className="text-right mb-8">
//               <p className="font-semibold text-gray-700">Date: {new Date().toLocaleDateString('en-GB')}</p>
//             </div>

//             {/* User Details */}
//             <div className="mb-8">
//               <table className="w-full border-collapse">
//                 <tbody>
//                   <tr>
//                     <td className="font-semibold py-3 w-1/4 border-b border-gray-300 text-gray-700">Full Name:</td>
//                     <td className="py-3 border-b border-gray-300 pl-4 font-medium">{user.fullName}</td>
//                   </tr>
//                   <tr>
//                     <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">Date of Birth:</td>
//                     <td className="py-3 border-b border-gray-300 pl-4">{user.dateOfBirth}</td>
//                   </tr>
//                   <tr>
//                     <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">Passport No:</td>
//                     <td className="py-3 border-b border-gray-300 pl-4 font-mono">{user.passportNumber}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Company Details */}
//             <div className="mb-8">
//               <p className="mb-4 text-gray-700 leading-relaxed">
//                 The Canadian Natural Resources EDEN FOOD Company are pleased to offer you employment in
//                 Canadian Natural Resources EDEN FOOD COMPANY Mountain Ave, Banff, AB T2P 418, CANADA.
//               </p>
              
//               <table className="w-full border-collapse">
//                 <tbody>
//                   <tr>
//                     <td className="font-semibold py-3 w-1/4 border-b border-gray-300 text-gray-700">DESIGNATION:</td>
//                     <td className="py-3 border-b border-gray-300 pl-4 font-medium text-green-700">{user.workField}</td>
//                   </tr>
//                   <tr>
//                     <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">CONTRACT PERIOD:</td>
//                     <td className="py-3 border-b border-gray-300 pl-4">
//                       This contract will be valid for a period of 2 years from the date of joining
//                       and is renewable after the completion of the first 2 years.
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Benefits */}
//             <div className="mb-10">
//               <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">REMUNERATION AND PERQUISITIES:</h3>
//               <ul className="list-disc pl-5 space-y-2 text-gray-700">
//                 <li className="leading-relaxed">We are offering Basic Monthly Salary 2800 Canadian Dollars with 200 Dollars Bonus and Total salary is 3000 Canadian dollars.</li>
//                 <li className="leading-relaxed">Housing: Suitable housing facility will be provided by the Cnrl.</li>
//                 <li className="leading-relaxed">Telephone: Telephone allowance will be given to you by the CANADIAN NATURAL RESOURCES</li>
//                 <li className="leading-relaxed">Medical: Medical coverage as per company rules and regulations shall be provided by the CURL.</li>
//                 <li className="leading-relaxed">Transport: Transport will be provided for official usage.</li>
//                 <li className="leading-relaxed">Annual Leave: Annual leave of one calendar month for each complete year of employment will be allowed. This may be accumulated for two year and available together. Leave encashment may also be permitted at management discretion.</li>
//                 <li className="leading-relaxed">Leave passage: Return air passage airfare for economic class will be given to you and your family i.e. wife/husband and two children under the age of eighteen years.</li>
//                 <li className="leading-relaxed">VISA EXPENSES: You shall responsible for the visa expenses but will be reimbursed on joining.</li>
//                 <li className="leading-relaxed">VISA AND TICKET will be given to you for free from the company owner.</li>
//               </ul>
//             </div>

//             {/* Signatures */}
//             <div className="mt-12 pt-8 border-t">
//               <div className="flex justify-between">
//                 <div className="w-1/2">
//                   <p className="font-semibold mb-6 text-gray-700">Employee Signature:</p>
//                   <div className="h-16 border-b border-gray-400"></div>
//                   <p className="text-sm text-gray-500 mt-2">Date: ________________</p>
//                 </div>
//                 <div className="w-1/2 text-right">
//                   <p className="font-semibold mb-6 text-gray-700">Company Owner:</p>
//                   <p className="text-lg font-medium">Mr. SARDAR JAGMOHAN SINGH</p>
//                   <p className="text-gray-600 mt-2 text-sm">Mobile No. +13435013133 / +447441929399</p>
//                   <div className="h-16 border-b border-gray-400 mt-6"></div>
//                   <p className="text-sm text-gray-500 mt-2">Date: {new Date().toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>

//             {/* APPROVED STAMP */}
//             <div className="absolute right-32 top-1/2 transform -rotate-12 opacity-90 pointer-events-none">
//               <div className="relative">
//                 <div className="w-48 h-48 border-8 border-red-600 rounded-full flex items-center justify-center bg-white/95 shadow-lg">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-red-600">APPROVED</div>
//                     <div className="text-lg mt-2 text-red-600 font-semibold">AG FOODS LTD.</div>
//                     <div className="text-sm mt-1 text-gray-700">Date: {new Date().toLocaleDateString()}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PDFGenerator;


import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';

const PDFGenerator = ({ user, isOpen, onClose }) => {
  const pdfRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!pdfRef.current || !user) return;
    
    setIsGenerating(true);
    
    try {
      // Create a clone of the element to avoid modifying the original
      const clone = pdfRef.current.cloneNode(true);
      
      // Remove problematic Tailwind classes and add inline styles
      const elementsWithBg = clone.querySelectorAll('[class*="bg-"], [class*="from-"], [class*="to-"]');
      elementsWithBg.forEach(el => {
        el.removeAttribute('class');
      });
      
      // Temporarily replace the element
      const originalParent = pdfRef.current.parentNode;
      const originalNextSibling = pdfRef.current.nextSibling;
      originalParent.replaceChild(clone, pdfRef.current);
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (document, element) => {
          // Ensure all colors are in hex format
          const allElements = element.querySelectorAll('*');
          allElements.forEach(el => {
            const styles = window.getComputedStyle(el);
            if (styles.color && styles.color.includes('oklch')) {
              el.style.color = '#000000';
            }
            if (styles.backgroundColor && styles.backgroundColor.includes('oklch')) {
              el.style.backgroundColor = '#ffffff';
            }
          });
        }
      });
      
      // Restore original element
      originalParent.replaceChild(pdfRef.current, clone);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Job_Offer_${user.fullName.replace(/\s+/g, '_')}.pdf`);
      
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Error generating PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Job Offer Letter</h2>
            <p className="text-gray-600">For: {user.fullName}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={generatePDF}
              disabled={isGenerating}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Download PDF
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Preview - Use inline styles to avoid Tailwind */}
        <div className="flex-1 overflow-auto p-8">
          <div ref={pdfRef} className="bg-white p-8 border border-gray-300 max-w-3xl mx-auto relative" style={{ backgroundColor: '#ffffff' }}>
            {/* Header */}
            <div className="text-center mb-8 border-b pb-6" style={{ borderBottom: '1px solid #d1d5db' }}>
              <h1 className="text-3xl font-bold mb-2" style={{ color: '#064e3b' }}>
                CANADIAN IMMIGRATION CONSULTANCY
              </h1>
              <p className="text-xl font-semibold" style={{ color: '#1f2937' }}>
                JOB OFFER AND AGREEMENT LETTER
              </p>
            </div>

            {/* Date */}
            <div className="text-right mb-8">
              <p className="font-semibold" style={{ color: '#374151' }}>Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>

            {/* User Details Table */}
            <div className="mb-8">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600', padding: '12px 0', width: '25%', borderBottom: '1px solid #9ca3af', color: '#374151' }}>Full Name:</td>
                    <td style={{ padding: '12px 0 12px 16px', borderBottom: '1px solid #9ca3af', fontWeight: '500' }}>{user.fullName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600', padding: '12px 0', borderBottom: '1px solid #9ca3af', color: '#374151' }}>Date of Birth:</td>
                    <td style={{ padding: '12px 0 12px 16px', borderBottom: '1px solid #9ca3af' }}>{user.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600', padding: '12px 0', borderBottom: '1px solid #9ca3af', color: '#374151' }}>Passport No:</td>
                    <td style={{ padding: '12px 0 12px 16px', borderBottom: '1px solid #9ca3af', fontFamily: 'monospace' }}>{user.passportNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Company Details */}
            <div className="mb-8">
              <p className="mb-4 leading-relaxed" style={{ color: '#374151' }}>
                The Canadian Natural Resources EDEN FOOD Company are pleased to offer you employment in
                Canadian Natural Resources EDEN FOOD COMPANY Mountain Ave, Banff, AB T2P 418, CANADA.
              </p>
              
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '600', padding: '12px 0', width: '25%', borderBottom: '1px solid #9ca3af', color: '#374151' }}>DESIGNATION:</td>
                    <td style={{ padding: '12px 0 12px 16px', borderBottom: '1px solid #9ca3af', fontWeight: '500', color: '#047857' }}>{user.workField}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '600', padding: '12px 0', borderBottom: '1px solid #9ca3af', color: '#374151' }}>CONTRACT PERIOD:</td>
                    <td style={{ padding: '12px 0 12px 16px', borderBottom: '1px solid #9ca3af' }}>
                      This contract will be valid for a period of 2 years from the date of joining
                      and is renewable after the completion of the first 2 years.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h3 className="font-bold text-lg mb-4 border-b pb-2" style={{ color: '#1f2937', borderBottom: '1px solid #9ca3af' }}>REMUNERATION AND PERQUISITIES:</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#374151' }}>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>We are offering Basic Monthly Salary 2800 Canadian Dollars with 200 Dollars Bonus and Total salary is 3000 Canadian dollars.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Housing: Suitable housing facility will be provided by the Cnrl.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Telephone: Telephone allowance will be given to you by the CANADIAN NATURAL RESOURCES</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Medical: Medical coverage as per company rules and regulations shall be provided by the CURL.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Transport: Transport will be provided for official usage.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Annual Leave: Annual leave of one calendar month for each complete year of employment will be allowed. This may be accumulated for two year and available together. Leave encashment may also be permitted at management discretion.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>Leave passage: Return air passage airfare for economic class will be given to you and your family i.e. wife/husband and two children under the age of eighteen years.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>VISA EXPENSES: You shall responsible for the visa expenses but will be reimbursed on joining.</li>
                <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>VISA AND TICKET will be given to you for free from the company owner.</li>
              </ul>
            </div>

            {/* Signatures */}
            <div className="mt-12 pt-8 border-t" style={{ borderTop: '1px solid #9ca3af' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '50%' }}>
                  <p className="font-semibold mb-6" style={{ color: '#374151' }}>Employee Signature:</p>
                  <div style={{ height: '64px', borderBottom: '1px solid #6b7280' }}></div>
                  <p className="text-sm mt-2" style={{ color: '#6b7280' }}>Date: ________________</p>
                </div>
                <div style={{ width: '50%', textAlign: 'right' }}>
                  <p className="font-semibold mb-6" style={{ color: '#374151' }}>Company Owner:</p>
                  <p className="text-lg font-medium">Mr. SARDAR JAGMOHAN SINGH</p>
                  <p className="text-sm mt-2" style={{ color: '#4b5563' }}>Mobile No. +13435013133 / +447441929399</p>
                  <div style={{ height: '64px', borderBottom: '1px solid #6b7280', marginTop: '24px' }}></div>
                  <p className="text-sm mt-2" style={{ color: '#6b7280' }}>Date: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* APPROVED STAMP */}
            <div className="absolute right-32 top-1/2 transform -rotate-12 opacity-90 pointer-events-none">
              <div className="relative">
                <div style={{
                  width: '192px',
                  height: '192px',
                  border: '8px solid #dc2626',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>APPROVED</div>
                    <div style={{ fontSize: '18px', marginTop: '8px', color: '#dc2626', fontWeight: '600' }}>AG FOODS LTD.</div>
                    <div style={{ fontSize: '14px', marginTop: '4px', color: '#374151' }}>Date: {new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PDFGenerator;