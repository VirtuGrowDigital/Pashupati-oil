import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "919876543210"; // 👈 Replace with your number (no + or spaces)

  return (
    <a
      href={`https://wa.me/${9208468980}?text=Hi, I want to know more about your products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
