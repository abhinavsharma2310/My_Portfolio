import React from "react";

const ContactShare = () => {
  const phoneNumber = "+91 9876543210"; // Replace with your number
  const email = "your.email@example.com"; // Replace with your email

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => console.error("Error copying text: ", err));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-gray-100 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Contact Me</h2>
      <div className="flex flex-col items-center">
        <p className="text-lg">📞 {phoneNumber}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
          onClick={() => copyToClipboard(phoneNumber)}
        >
          Copy Number
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-lg">📧 {email}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
          onClick={() => copyToClipboard(email)}
        >
          Copy Email
        </button>
      </div>
    </div>
  );
};

export default ContactShare;
