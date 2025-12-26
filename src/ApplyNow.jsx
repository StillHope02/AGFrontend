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

/* ===== Job Positions List ===== */
const jobPositions = [
  "Food Packer",
  "Quality Control Inspector",
  "Production Line Worker",
  "Warehouse Associate",
  "Forklift Operator",
  "Packaging Machine Operator",
  "Food Safety Supervisor",
  "Inventory Clerk",
  "Shift Supervisor",
  "Maintenance Technician",
  "Loading/Unloading Worker",
  "General Helper"
];

export default function ApplyNow() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    passportNumber: "",
    country: "",
    jobPosition: "",  // ✅ ADDED
    experience: "",
    photo: null,
    passportImage: null,
    certificate: null,
    // profilePicture: null,
  });

  const [previews, setPreviews] = useState({
    photo: null,
    // profilePicture: null,
    passportImage: null,
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Auto-uppercase passport number
    if (name === "passportNumber") {
      setForm({ ...form, [name]: value.toUpperCase() });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, [e.target.name]: file });
    if (file) {
      setPreviews({ ...previews, [e.target.name]: URL.createObjectURL(file) });
    }
  };

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

      // alert(data.message);
      setShowSuccess(true);

      // Auto hide popup after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);


      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        passportNumber: "",
        country: "",
        jobPosition: "",
        experience: "",
        photo: null,
        passportImage: null,
        certificate: null,
        // profilePicture: null,
      });
      setPreviews({ photo: null,  passportImage: null, certificate: null });

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
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={logoImage} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-green-700 transition font-medium">Home</button>
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              About Us
            </button>
            <button onClick={() => navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</button>
            <button className="text-green-700 font-semibold border-b-2 border-green-700 pb-1">Apply Now</button>
            <a href="#" onClick={() => navigate('/status')} className="text-red-600 hover:text-red-700 transition font-medium">Check Status</a>
          </div>

          <button className="lg:hidden text-gray-700 hover:text-green-700 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden pb-4 space-y-3"
          >
            <button onClick={() => { setIsMenuOpen(false); navigate("/"); }} className="block text-gray-700 hover:text-green-700 transition font-medium py-2 pl-4 w-full text-left">Home</button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
                setTimeout(() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="block text-gray-700 hover:text-green-700 transition font-medium py-2 pl-4 w-full text-left"
            >
              About Us
            </button>
            <button onClick={() => navigate('/jobs')} className="block text-gray-800 hover:text-green-700 transition font-medium py-2 pl-4">AG Foods Canada Jobs</button>
            <div onClick={() => navigate('/apply-now')} className="block text-green-700 font-semibold py-2 border-l-4 border-green-700 pl-4">Apply Now</div>
            <a href="#" onClick={() => navigate('/status')} className="block text-red-600 hover:text-red-700 transition font-medium py-2 pl-4">Check Status</a>
          </motion.div>
        )}
      </motion.nav>

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

            {/* Passport Number */}
            <div>
              <label className="text-sm font-semibold">Passport Number</label>
              <input
                required
                name="passportNumber"
                value={form.passportNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 uppercase"
                placeholder="AB1234567"
                maxLength="15"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter your passport number (will be used to check application status)
              </p>
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

            {/* ✅ JOB POSITION DROPDOWN - NEW */}
            <div>
              <label className="text-sm font-semibold">Job Position Applying For</label>
              <select
                required
                name="jobPosition"
                value={form.jobPosition}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Select Job Position</option>
                {jobPositions.map((job) => (
                  <option key={job} value={job}>{job}</option>
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

            {/* ================= FILE UPLOADS ================= */}
            <div className="space-y-6">

              {/* Profile Photo */}
              <div className="border-2 border-dashed rounded-xl p-4 hover:border-green-600 transition">
                <label className="flex items-center gap-3 cursor-pointer">
                  <ImageIcon className="text-green-700" />
                  <span className="font-semibold">Profile Photo/Passport Size Photo</span>
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
              {/* ================= PROFILE PICTURE ================= */}
              {/* <div className="border-2 border-dashed rounded-xl p-4 hover:border-green-600 transition">
                <label className="flex items-center gap-3 cursor-pointer">
                  <ImageIcon className="text-green-700" />
                  <span className="font-semibold">Profile Picture</span>
                  <span className="text-xs text-gray-500">(Required)</span>

                  <input
                    type="file"
                    name="profilePicture"
                    required
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>

                {previews.profilePicture && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={previews.profilePicture}
                      alt="Profile Preview"
                      className="w-20 h-20 rounded-full object-cover border"
                    />
                    <span className="text-sm text-gray-600">
                      {form.profilePicture?.name}
                    </span>
                  </div>
                )}
              </div> */}


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
                  <span className="font-semibold">Experience Certificate/CV</span>
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

            <button className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800">
              Submit Application
            </button>
          </form>

          <div className="bg-gray-50 text-center py-3 text-xs text-gray-500">
            All documents are confidential and secure.
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Job Benefits Include</h2>
          <p className="text-gray-600 mb-8">
            AG Food Visa provides numerous benefits to ensure a comfortable work experience for its employees:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Free Visa:</span>
                <span className="text-gray-600"> No visa fees are required.</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Free Accommodation:</span>
                <span className="text-gray-600"> Housing is provided near the workplace.</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Free Ticket:</span>
                <span className="text-gray-600"> One-time two-way airfare covered.</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Free Food:</span>
                <span className="text-gray-600"> Three meals per day provided.</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Free Insurance:</span>
                <span className="text-gray-600"> Full medical and health insurance coverage.</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Other Perks:</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Assistance with relocation.</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Opportunity to apply for permanent residency after employment.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility Criteria to Apply</h3>
          <div className="space-y-3 mb-8">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Age:</span>
                <span className="text-gray-600"> Must be 18 years or older.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-bold text-gray-800">Language Skills:</span>
                <span className="text-gray-600"> Basic knowledge of English, Urdu, Hindi and Arabic.</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required:</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Valid Passport</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">National ID Card</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Recent Passport-Size Photo</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Character Certificate</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">Health & Fitness: Should be physically fit for the job.</p>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Application Submitted
            </h3>

            <p className="text-gray-600 text-sm">
              Your request has been submitted successfully.
              <br />
              Our agent will contact you within <strong>24 hours</strong> on WhatsApp.
            </p>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}