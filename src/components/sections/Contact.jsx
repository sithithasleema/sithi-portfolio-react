import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  return (
    <section
      id="contact"
      className="max-w-full lg:px-20   border-gray-300 mb-20"
    >
      <div className="p-10 max-w-[90%] lg:max-w-[50%]  bg-gray-200 mx-auto">
        <h2 className=" z-40 text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-500 text-transparent bg-clip-text ">
          Get In Touch
        </h2>
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-gray/5 border border-gray-500 rounded px-4 py-3  transition focus:border-red-950/5 focus:bg-amber-950/5"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-gray/5 border border-gray-500 rounded px-4 py-3  transition focus:border-red-950/5 focus:bg-amber-950/5"
              placeholder="example@email.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-gray/5 border border-gray-500 rounded px-4 py-3  transition focus:border-red-950/5 focus:bg-amber-950/5"
              placeholder="Enter Your Message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c3484b] text-gray-200 py-3 px-6 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden hover:shadow-amber-950 hover:bg-amber-950 "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
