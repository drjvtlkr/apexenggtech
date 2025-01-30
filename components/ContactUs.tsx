'use client'
import React, { useRef } from "react";

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwKGpziaDcFTaI_R_A-GjiHxD0ZHmhXW9OlfPfxk6dcYtwnBj0sOjk5jKVwZUklgxK2aA/exec";

    try {
      if (!formRef.current) {
        console.error("Form reference is not available");
        return;
      }

      const form = formRef.current;
      const formData = new FormData(form);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Thank you for contacting us!");
        console.log(response);
        
        form.reset();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error!", error.message);
        alert("An error occurred while submitting the form. Please try again.");
      } else {
        console.error("Unknown error occurred", error);
      }
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center bg-gray-50 py-12 px-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={7}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Submit"
                id="submit"
                className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-md shadow-md hover:bg-orange-500 transition-all duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
