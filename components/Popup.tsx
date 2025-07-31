// components/Popup.tsx
'use client'

import { useState } from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup = ({ onClose }: PopupProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('Phone', number);

      const response = await fetch('/api', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success:", result.message);
        // Reset form
        setName("");
        setEmail("");
        setNumber("");
        onClose();
        // Show success message
        alert("Form submitted successfully!");
      } else {
        setError(result.message || 'Failed to submit form');
        alert("Error: " + (result.message || 'Failed to submit form'));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('Network error occurred');
      alert("Network error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Enter your details</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="w-full mb-2 p-2 border rounded"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Number"
            value={number}
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
           <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full mb-2 p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-lime-700 text-white py-2 rounded hover:bg-lime-800 disabled:bg-lime-900 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;

// function sendWhatsAppMessages() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const mainSheet   = ss.getSheetByName("Main");    // Sheet with Name & Phone
//   const couponSheet = ss.getSheetByName("Coupons"); // Sheet with Coupon Codes

//   // Read all rows from both sheets
//   const mainData   = mainSheet.getDataRange().getValues();
//   const couponData = couponSheet.getDataRange().getValues();

//   // Loop rows, skipping header (row 1)
//   for (let i = 1; i < mainData.length; i++) {
//     const name       = mainData[i][0];    // Column A of Main
//     const phone      = mainData[i][1];    // Column B of Main
//     const couponCode = couponData[i][0];  // Column A of Coupons

//     // Build personalized message
//     const text = `🎁 Hello ${name}, you’ve received an exclusive OffiShop coupon. Use code ${couponCode} to get ₹100 off. Limited time offer!`;
//     const encodedMessage = encodeURIComponent(text);

//     // WhatsApp Web URL
//     const url = `https://wa.me/${phone}?text=${encodedMessage}`;

//     // Log the link (copy these from View → Logs)
//     Logger.log(url);
//   }

//   // Notify when done
//   SpreadsheetApp.getUi().alert(
//     '✅ Links generated! Go to View → Logs in the Apps Script editor to copy them.'
//   );
// }

