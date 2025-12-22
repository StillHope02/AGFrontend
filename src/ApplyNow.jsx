import React, { useState } from "react";
import { db, storage } from "./fireebaseConfig";
import { ref as dbRef, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ApplyNow() {
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
  } catch (err) {
    console.error(err);
    alert("Error submitting form.");
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
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
              required
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              placeholder="+92XXXXXXXXXX"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Current Country</label>
            <input
              type="text"
              name="country"
              required
              onChange={handleChange}
              placeholder="Pakistan"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Do you have a passport?</label>
            <select
              name="passport"
              required
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
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
              required
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
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
                className="w-full border rounded-lg px-3 py-2"
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
                className="w-full border rounded-lg px-3 py-2"
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
              className="w-full border rounded-lg px-3 py-2"
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
  );
}
