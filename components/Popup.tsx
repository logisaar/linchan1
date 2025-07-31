// components/Popup.tsx
'use client'

import { useState } from "react";
import { X } from "lucide-react";

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
        // Store form submission status in localStorage
        localStorage.setItem("formSubmitted", "true");
        localStorage.setItem("userInfo", JSON.stringify({ name, email, number }));
        
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

  const handleClose = () => {
    // Store that user has seen the popup (even if they didn't submit)
    localStorage.setItem("popupSeen", "true");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
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

