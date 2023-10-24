import React, { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    service_name: "",
    service_description: "",
    service_price: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/services", formData);
      console.log("Service submitted successfully");
    } catch (error) {
      console.error("Error submitting service:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-white mb-8">Services</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-green-100 to-blue-400 p-8 rounded-md max-w-xl w-full md:w-3/4 lg:w-1/2 xl:w-3/4"
      >
        <div className="mb-4">
          <label htmlFor="service_name" className="block text-sm font-medium text-gray-600">
            Service Name
          </label>
          <input
            type="text"
            id="service_name"
            name="service_name"
            value={formData.service_name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="service_description" className="block text-sm font-medium text-gray-600">
            Service Description
          </label>
          <textarea
            id="service_description"
            name="service_description"
            value={formData.service_description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="service_price" className="block text-sm font-medium text-gray-600">
            Service Price
          </label>
          <input
            type="number"
            id="service_price"
            name="service_price"
            value={formData.service_price}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
