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
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
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

        {/* PDF Preview */}
        <div className="flex-1 overflow-auto p-8">
          <div ref={pdfRef} className="bg-white p-8 border border-gray-300 max-w-3xl mx-auto relative">
            {/* Header */}
            <div className="text-center mb-8 border-b pb-6">
              <h1 className="text-3xl font-bold text-green-900 mb-2">
                CANADIAN IMMIGRATION CONSULTANCY
              </h1>
              <p className="text-xl font-semibold text-gray-800">
                JOB OFFER AND AGREEMENT LETTER
              </p>
            </div>

            {/* Date */}
            <div className="text-right mb-8">
              <p className="font-semibold text-gray-700">Date: {new Date().toLocaleDateString('en-GB')}</p>
            </div>

            {/* User Details */}
            <div className="mb-8">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="font-semibold py-3 w-1/4 border-b border-gray-300 text-gray-700">Full Name:</td>
                    <td className="py-3 border-b border-gray-300 pl-4 font-medium">{user.fullName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">Date of Birth:</td>
                    <td className="py-3 border-b border-gray-300 pl-4">{user.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">Passport No:</td>
                    <td className="py-3 border-b border-gray-300 pl-4 font-mono">{user.passportNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Company Details */}
            <div className="mb-8">
              <p className="mb-4 text-gray-700 leading-relaxed">
                The Canadian Natural Resources EDEN FOOD Company are pleased to offer you employment in
                Canadian Natural Resources EDEN FOOD COMPANY Mountain Ave, Banff, AB T2P 418, CANADA.
              </p>
              
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="font-semibold py-3 w-1/4 border-b border-gray-300 text-gray-700">DESIGNATION:</td>
                    <td className="py-3 border-b border-gray-300 pl-4 font-medium text-green-700">{user.workField}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-3 border-b border-gray-300 text-gray-700">CONTRACT PERIOD:</td>
                    <td className="py-3 border-b border-gray-300 pl-4">
                      This contract will be valid for a period of 2 years from the date of joining
                      and is renewable after the completion of the first 2 years.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h3 className="font-bold text-lg mb-4 text-gray-800 border-b pb-2">REMUNERATION AND PERQUISITIES:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li className="leading-relaxed">We are offering Basic Monthly Salary 2800 Canadian Dollars with 200 Dollars Bonus and Total salary is 3000 Canadian dollars.</li>
                <li className="leading-relaxed">Housing: Suitable housing facility will be provided by the Cnrl.</li>
                <li className="leading-relaxed">Telephone: Telephone allowance will be given to you by the CANADIAN NATURAL RESOURCES</li>
                <li className="leading-relaxed">Medical: Medical coverage as per company rules and regulations shall be provided by the CURL.</li>
                <li className="leading-relaxed">Transport: Transport will be provided for official usage.</li>
                <li className="leading-relaxed">Annual Leave: Annual leave of one calendar month for each complete year of employment will be allowed. This may be accumulated for two year and available together. Leave encashment may also be permitted at management discretion.</li>
                <li className="leading-relaxed">Leave passage: Return air passage airfare for economic class will be given to you and your family i.e. wife/husband and two children under the age of eighteen years.</li>
                <li className="leading-relaxed">VISA EXPENSES: You shall responsible for the visa expenses but will be reimbursed on joining.</li>
                <li className="leading-relaxed">VISA AND TICKET will be given to you for free from the company owner.</li>
              </ul>
            </div>

            {/* Signatures */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="font-semibold mb-6 text-gray-700">Employee Signature:</p>
                  <div className="h-16 border-b border-gray-400"></div>
                  <p className="text-sm text-gray-500 mt-2">Date: ________________</p>
                </div>
                <div className="w-1/2 text-right">
                  <p className="font-semibold mb-6 text-gray-700">Company Owner:</p>
                  <p className="text-lg font-medium">Mr. SARDAR JAGMOHAN SINGH</p>
                  <p className="text-gray-600 mt-2 text-sm">Mobile No. +13435013133 / +447441929399</p>
                  <div className="h-16 border-b border-gray-400 mt-6"></div>
                  <p className="text-sm text-gray-500 mt-2">Date: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* APPROVED STAMP */}
            <div className="absolute right-32 top-1/2 transform -rotate-12 opacity-90 pointer-events-none">
              <div className="relative">
                <div className="w-48 h-48 border-8 border-red-600 rounded-full flex items-center justify-center bg-white/95 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">APPROVED</div>
                    <div className="text-lg mt-2 text-red-600 font-semibold">AG FOODS LTD.</div>
                    <div className="text-sm mt-1 text-gray-700">Date: {new Date().toLocaleDateString()}</div>
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