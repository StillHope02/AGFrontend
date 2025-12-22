// import React, { useState } from "react";
// import { db, storage } from "./fireebaseConfig";
// import { ref as dbRef, set } from "firebase/database";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// export default function ApplyNow() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     country: "",
//     passport: "",
//     experience: "",
//     photo: null,
//     passportImage: null,
//     certificate: null,
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFile = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.files[0] });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("phone", form.phone);
//     formData.append("country", form.country);
//     formData.append("passport", form.passport);
//     formData.append("experience", form.experience);
//     formData.append("photo", form.photo);
//     formData.append("passportImage", form.passportImage);
//     if (form.certificate) formData.append("certificate", form.certificate);

//     const res = await fetch("https://agfoodbackend-production.up.railway.app/apply", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     alert(data.message);

//     setForm({
//       name: "",
//       phone: "",
//       country: "",
//       passport: "",
//       experience: "",
//       photo: null,
//       passportImage: null,
//       certificate: null,
//     });
//   } catch (err) {
//     console.error(err);
//     alert("Error submitting form.");
//   }
// };



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-blue-700 text-white px-6 py-8 text-center">
//           <h1 className="text-2xl sm:text-3xl font-bold">
//             Overseas Job Application
//           </h1>
//           <p className="text-blue-100 mt-2 text-sm">
//             AG Food Packing Company – Canada
//           </p>
//         </div>

//         {/* Job Info */}
//         <div className="px-6 py-5 bg-blue-50 border-b text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
//           <p><strong>Position:</strong> Food Packing Worker</p>
//           <p><strong>Country:</strong> Canada</p>
//           <p><strong>Visa:</strong> Free</p>
//           <p><strong>Accommodation:</strong> Provided</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="px-6 py-8 space-y-5">
//           <div>
//             <label className="block text-sm font-semibold mb-1">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Mobile Number</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               onChange={handleChange}
//               placeholder="+92XXXXXXXXXX"
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Current Country</label>
//             <input
//               type="text"
//               name="country"
//               required
//               onChange={handleChange}
//               placeholder="Pakistan"
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Do you have a passport?</label>
//             <select
//               name="passport"
//               required
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="">Select</option>
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">Food Packing Experience</label>
//             <select
//               name="experience"
//               required
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
//             >
//               <option value="">Select</option>
//               <option value="0-1 year">0 – 1 Year</option>
//               <option value="1-3 years">1 – 3 Years</option>
//               <option value="3+ years">3+ Years</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Upload Profile Photo
//               </label>
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/*"
//                 required
//                 onChange={handleFile}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Upload Passport Copy
//               </label>
//               <input
//                 type="file"
//                 name="passportImage"
//                 accept="image/*,.pdf"
//                 required
//                 onChange={handleFile}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold mb-1">
//               Experience Certificate (Optional)
//             </label>
//             <input
//               type="file"
//               name="certificate"
//               accept="image/*,.pdf"
//               onChange={handleFile}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition"
//           >
//             Submit Application
//           </button>
//         </form>

//         <div className="bg-gray-50 text-center py-4 text-xs text-gray-500">
//           All documents are confidential and secure.
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logoImage from './assets/Logo.webp';

export default function ApplyNow() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "",
    passport: "",
    experience: "",
    photo: null,
    passportImage: null,
    certificate: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("country", form.country);
      formData.append("passport", form.passport);
      formData.append("experience", form.experience);
      formData.append("photo", form.photo);
      formData.append("passportImage", form.passportImage);
      if (form.certificate) formData.append("certificate", form.certificate);

      const res = await fetch("https://agfoodbackend-production.up.railway.app/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);

      // Reset form
      setForm({
        name: "",
        phone: "",
        country: "",
        passport: "",
        experience: "",
        photo: null,
        passportImage: null,
        certificate: null,
      });

      // Reset file inputs
      document.querySelectorAll('input[type="file"]').forEach(input => {
        input.value = '';
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <img src={logoImage} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-blue-700 transition font-medium"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-gray-700 hover:text-blue-700 transition font-medium"
              >
                About Us
              </button>
              <a href="#" className="text-gray-700 hover:text-blue-700 transition font-medium">
                Our Brands
              </a>
              <button
                className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
              >
                Apply Now
              </button>
              <a href="#" className="text-red-600 hover:text-red-700 transition font-medium">
                Check Status
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-700 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/");
                }}
                className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4 w-full text-left"
              >
                About Us
              </button>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-700 transition font-medium py-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Brands
              </a>
              <div className="block text-blue-700 font-semibold py-2 border-l-4 border-blue-700 pl-4">
                Apply Now
              </div>
              <a
                href="#"
                className="block text-red-600 hover:text-red-700 transition font-medium py-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Check Status
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700 text-white px-6 py-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Overseas Job Application
            </h1>
            <p className="text-blue-100 mt-2 text-sm">
              AG Food Packing Company – Canada
            </p>
          </div>

          {/* Job Info */}
          <div className="px-6 py-5 bg-blue-50 border-b text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p><strong>Position:</strong> Food Packing Worker</p>
            <p><strong>Country:</strong> Canada</p>
            <p><strong>Visa:</strong> Free</p>
            <p><strong>Accommodation:</strong> Provided</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                required
                onChange={handleChange}
                placeholder="+92XXXXXXXXXX"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Current Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                required
                onChange={handleChange}
                placeholder="Pakistan"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Do you have a passport?</label>
              <select
                name="passport"
                value={form.passport}
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Food Packing Experience</label>
              <select
                name="experience"
                value={form.experience}
                required
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="0-1 year">0 – 1 Year</option>
                <option value="1-3 years">1 – 3 Years</option>
                <option value="3+ years">3+ Years</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Profile Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  required
                  onChange={handleFile}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Passport Copy
                </label>
                <input
                  type="file"
                  name="passportImage"
                  accept="image/*,.pdf"
                  required
                  onChange={handleFile}
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Experience Certificate (Optional)
              </label>
              <input
                type="file"
                name="certificate"
                accept="image/*,.pdf"
                onChange={handleFile}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition"
            >
              Submit Application
            </button>
          </form>

          <div className="bg-gray-50 text-center py-4 text-xs text-gray-500">
            All documents are confidential and secure.
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/15819001004"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition transform hover:scale-110 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          className="sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}