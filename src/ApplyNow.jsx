// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";
// import logoImage from "./assets/Logo.webp";

// export default function ApplyNow() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

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

//   const [previews, setPreviews] = useState({
//     photo: null,
//     passportImage: null,
//     certificate: null,
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     setForm({ ...form, [e.target.name]: file });
//     if (file) {
//       setPreviews({ ...previews, [e.target.name]: URL.createObjectURL(file) });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       Object.keys(form).forEach((key) => {
//         if (form[key]) formData.append(key, form[key]);
//       });

//       const res = await fetch(
//         "https://agfoodbackend-production.up.railway.app/apply",
//         { method: "POST", body: formData }
//       );
//       const data = await res.json();
//       alert(data.message);

//       setForm({
//         name: "",
//         phone: "",
//         country: "",
//         passport: "",
//         experience: "",
//         photo: null,
//         passportImage: null,
//         certificate: null,
//       });
//       setPreviews({ photo: null, passportImage: null, certificate: null });
//       document.querySelectorAll('input[type="file"]').forEach((input) => (input.value = ""));
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form.");
//     }
//   };

//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 font-sans">

//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
//           <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
//             <img src={logoImage} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
//           </div>

//           <div className="hidden lg:flex items-center gap-8">
//             <button onClick={() => navigate("/")} className="text-gray-700 hover:text-green-700 transition font-medium">Home</button>
//             <button
//               onClick={() => {
//                 navigate("/");
//                 setTimeout(() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" }), 100);
//               }}
//               className="text-gray-700 hover:text-green-700 transition font-medium"
//             >
//               About Us
//             </button>
//             <button onClick={()=> navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</button>
//             <button className="text-green-700 font-semibold border-b-2 border-green-700 pb-1">Apply Now</button>
//             <a href="#" className="text-red-600 hover:text-red-700 transition font-medium">Check Status</a>
//           </div>

//           <button className="lg:hidden text-gray-700 hover:text-green-700 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             transition={{ duration: 0.4 }}
//             className="lg:hidden pb-4 space-y-3"
//           >
//             <button onClick={() => { setIsMenuOpen(false); navigate("/"); }} className="block text-gray-700 hover:text-green-700 transition font-medium py-2 pl-4 w-full text-left">Home</button>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 navigate("/");
//                 setTimeout(() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" }), 100);
//               }}
//               className="block text-gray-700 hover:text-green-700 transition font-medium py-2 pl-4 w-full text-left"
//             >
//               About Us
//             </button>
//             <button onClick={()=> navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</button>
//             <div className="block text-green-700 font-semibold py-2 border-l-4 border-green-700 pl-4">Apply Now</div>
//             <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-red-600 hover:text-red-700 transition font-medium py-2 pl-4">Check Status</a>
//           </motion.div>
//         )}
//       </motion.nav>

//       {/* Form Section */}
//       <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex justify-center px-4 py-12">
//         <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-green-700 text-white px-6 py-8 text-center">
//             <h1 className="text-2xl sm:text-3xl font-bold">Overseas Job Application</h1>
//             <p className="text-green-100 mt-2 text-sm">AG Food Packing Company – Canada</p>
//           </motion.div>

//           {/* Job Info */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="px-6 py-5 bg-green-50 border-b text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
//             <p><strong>Position:</strong> Food Packing Worker</p>
//             <p><strong>Country:</strong> Canada</p>
//             <p><strong>Visa:</strong> Free</p>
//             <p><strong>Accommodation:</strong> Provided</p>
//           </motion.div>

//           {/* Form */}
//           <motion.form onSubmit={handleSubmit} variants={fadeInUp} initial="hidden" animate="visible" className="px-6 py-8 space-y-5">

//             {/* Text Inputs */}
//             {["name", "phone", "country"].map((field) => (
//               <motion.div key={field} whileFocus={{ scale: 1.02 }} className="space-y-1">
//                 <label className="block text-sm font-semibold">{field === "name" ? "Full Name" : field === "phone" ? "Mobile Number" : "Current Country"}</label>
//                 <input
//                   type={field === "phone" ? "tel" : "text"}
//                   name={field}
//                   value={form[field]}
//                   required
//                   onChange={handleChange}
//                   placeholder={field === "name" ? "Enter your full name" : field === "phone" ? "+92XXXXXXXXXX" : "Pakistan"}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
//                 />
//               </motion.div>
//             ))}

//             {/* Passport & Experience */}
//             <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-semibold mb-1">Do you have a passport?</label>
//                 <select
//                   name="passport"
//                   value={form.passport}
//                   required
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
//                 >
//                   <option value="">Select</option>
//                   <option value="Yes">Yes</option>
//                   <option value="No">No</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-1">Food Packing Experience</label>
//                 <select
//                   name="experience"
//                   value={form.experience}
//                   required
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
//                 >
//                   <option value="">Select</option>
//                   <option value="0-1 year">0 – 1 Year</option>
//                   <option value="1-3 years">1 – 3 Years</option>
//                   <option value="3+ years">3+ Years</option>
//                 </select>
//               </div>
//             </motion.div>

//             {/* File Uploads */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 { name: "photo", label: "Upload Profile Photo", accept: "image/*" },
//                 { name: "passportImage", label: "Upload Passport Copy", accept: "image/*,.pdf" }
//               ].map((fileField) => (
//                 <motion.div key={fileField.name} whileHover={{ scale: 1.02 }} className="space-y-1">
//                   <label className="block text-sm font-semibold mb-1">{fileField.label}</label>
//                   <input type="file" name={fileField.name} accept={fileField.accept} required onChange={handleFile} className="w-full border rounded-lg px-3 py-2 text-sm" />
//                   {previews[fileField.name] && <img src={previews[fileField.name]} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />}
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div whileHover={{ scale: 1.02 }} className="space-y-1">
//               <label className="block text-sm font-semibold mb-1">Experience Certificate (Optional)</label>
//               <input type="file" name="certificate" accept="image/*,.pdf" onChange={handleFile} className="w-full border rounded-lg px-3 py-2 text-sm" />
//               {previews.certificate && <img src={previews.certificate} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />}
//             </motion.div>

//             {/* Submit */}
//             <motion.button whileHover={{ scale: 1.05 }} type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition">
//               Submit Application
//             </motion.button>
//           </motion.form>

//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-gray-50 text-center py-4 text-xs text-gray-500">
//             All documents are confidential and secure.
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* WhatsApp Button */}
//        <motion.a
//               animate={{ y: [0, -4, 0] }}
//               transition={{ repeat: Infinity, duration: 1.8 }}
//               href="https://wa.me/15819001004"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50"
//             >
//               <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-1 rounded-full shadow-xl transition-all hover:scale-105">

//                 {/* WhatsApp Icon */}
//                 <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
//                   </svg>
//                 </div>

//                 {/* Text */}
//                 <span className="font-semibold text-sm sm:text-base whitespace-nowrap">
//                   AG Foods Canada
//                 </span>
//               </div>
//             </motion.a>
//       {/* <motion.a whileHover={{ scale: 1.2 }} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} href="https://wa.me/15819001004" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg z-50">
//         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//         </svg>
//       </motion.a> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "./assets/Logo.webp";
import { UploadCloud, FileText, Image as ImageIcon } from "lucide-react";

/* ===== Country List ===== */
const countries = [
  "Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal", "Afghanistan",
  "United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait",
  "Malaysia", "Indonesia", "Philippines", "China", "Japan", "South Korea",
  "United Kingdom", "United States", "Canada", "Australia", "New Zealand",
  "Germany", "France", "Italy", "Spain", "Netherlands", "Sweden", "Norway",
  "Finland", "Denmark", "Turkey", "Egypt", "South Africa", "Nigeria", "Kenya",
  "Brazil", "Argentina", "Mexico", "Chile", "Peru"
];

export default function ApplyNow() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    photo: null,
    passportImage: null,
    certificate: null,
  });

  const [previews, setPreviews] = useState({
    photo: null,
    passportImage: null,
    certificate: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    if (file) {
      setPreviews({ ...previews, [e.target.name]: URL.createObjectURL(file) });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     Object.keys(form).forEach((key) => {
  //       if (form[key]) formData.append(key, form[key]);
  //     });

  //     const res = await fetch(
  //       " http://localhost:5000/apply",
  //       { method: "POST", body: formData }
  //     );
  //     const data = await res.json();
  //     alert(data.message);

  //     setForm({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       country: "",
  //       experience: "",
  //       photo: null,
  //       passportImage: null,
  //       certificate: null,
  //     });
  //     setPreviews({ photo: null, passportImage: null, certificate: null });
  //     document.querySelectorAll('input[type="file"]').forEach((i) => (i.value = ""));
  //   } catch (err) {
  //     alert("Error submitting form");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Validate files before submitting
    if (!form.photo || !form.passportImage) {
      alert("Please upload both profile photo and passport image");
      return;
    }

    const formData = new FormData();
    
    // Append all form fields
    Object.keys(form).forEach((key) => {
      if (form[key]) {
        formData.append(key, form[key]);
      }
    });

    console.log("📤 Submitting form data...");

    const res = await fetch("https://agfoodbackend-production.up.railway.app/apply", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || "Submission failed");
    }

    alert(data.message);

    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      country: "",
      experience: "",
      photo: null,
      passportImage: null,
      certificate: null,
    });
    setPreviews({ photo: null, passportImage: null, certificate: null });
    
    // Clear file inputs
    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.value = "";
    });

  } catch (err) {
    console.error("❌ Submission error:", err);
    alert(`Error: ${err.message}`);
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

          <div className="hidden lg:flex gap-6">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/jobs")}>Jobs</button>
            <button className="font-bold text-green-700">Apply Now</button>
            <button onClick={()=> navigate('/status')} className="font-bold text-red-700">Check Status</button>
          </div>
        </div>
      </nav>

      {/* ================= FORM ================= */}
      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-green-700 text-white text-center py-8">
            <h1 className="text-2xl font-bold">Overseas Job Application</h1>
            <p className="text-green-100 text-sm mt-1">
              AG Food Packing Company – Canada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">

            {/* Name */}
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold">Enter Whatsapp Mobile Number</label>
              <input
                type="tel"
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="+92XXXXXXXXXX"
              />
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="text-sm font-semibold">Current Country</label>
              <select
                required
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm font-semibold">Food Packing Experience</label>
              <select
                required
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select</option>
                <option value="0-1 year">0 – 1 Year</option>
                <option value="1-3 years">1 – 3 Years</option>
                <option value="3+ years">3+ Years</option>
              </select>
            </div>

            {/* Uploads */}
            {/* ================= FILE UPLOADS ================= */}
            <div className="space-y-6">

              {/* Profile Photo */}
              <div className="border-2 border-dashed rounded-xl p-4 hover:border-green-600 transition">
                <label className="flex items-center gap-3 cursor-pointer">
                  <ImageIcon className="text-green-700" />
                  <span className="font-semibold">Profile Photo</span>
                  <span className="text-xs text-gray-500">(Required)</span>

                  <input
                    type="file"
                    name="photo"
                    required
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>

                {previews.photo && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={previews.photo}
                      alt="Preview"
                      className="w-20 h-20 rounded-lg object-cover border"
                    />
                    <span className="text-sm text-gray-600">
                      {form.photo?.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Passport Copy */}
              <div className="border-2 border-dashed rounded-xl p-4 hover:border-green-600 transition">
                <label className="flex items-center gap-3 cursor-pointer">
                  <FileText className="text-green-700" />
                  <span className="font-semibold">Passport Copy</span>
                  <span className="text-xs text-gray-500">(Required)</span>

                  <input
                    type="file"
                    name="passportImage"
                    required
                    accept="image/*,application/pdf"
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>

                {previews.passportImage && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={previews.passportImage}
                      alt="Preview"
                      className="w-20 h-20 rounded-lg object-cover border"
                    />
                    <span className="text-sm text-gray-600">
                      {form.passportImage?.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Experience Certificate */}
              <div className="border-2 border-dashed rounded-xl p-4 hover:border-green-600 transition">
                <label className="flex items-center gap-3 cursor-pointer">
                  <UploadCloud className="text-green-700" />
                  <span className="font-semibold">Experience Certificate/cv</span>
                  <span className="text-xs text-gray-500">(Optional)</span>

                  <input
                    type="file"
                    name="certificate"
                    accept="image/*,application/pdf"
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>

                {form.certificate && (
                  <p className="mt-2 text-sm text-gray-600">
                    {form.certificate.name}
                  </p>
                )}
              </div>

            </div>

            {/* <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Profile Photo</label>
                <input type="file" required name="photo" onChange={handleFile} />
                {previews.photo && <img src={previews.photo} className="w-20 mt-2 rounded" />}
              </div>

              <div>
                <label className="text-sm font-semibold">Passport Copy</label>
                <input type="file" required name="passportImage" onChange={handleFile} />
                {previews.passportImage && <img src={previews.passportImage} className="w-20 mt-2 rounded" />}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Experience Certificate (Optional)</label>
              <input type="file" name="certificate" onChange={handleFile} />
            </div> */}

            <button className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800">
              Submit Application
            </button>
          </form>

          <div className="bg-gray-50 text-center py-3 text-xs text-gray-500">
            All documents are confidential and secure.
          </div>
        </div>
      </div>
    </div>
  );
}
