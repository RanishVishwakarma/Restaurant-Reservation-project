import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    numberOfGuests: "",
  });

  const timeslot = () => {
    const slots = [];
    for (let hour = 9; hour <= 22; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}/api/reservations/create`,
        formData
      );

      if (response.data.success) {
        toast.success("Reservation created successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          numberOfGuests: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create reservation"
      );
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-black text-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* LEFT: FORM */}
        <div className="lg:col-span-2 bg-[#141414]/90 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-400">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-400 mb-2">
            Online Reservation
          </p>

          <h1 className="text-3xl sm:text-4xl font-serif leading-tight mb-10">
            Dine With Us <br />
            <span className="text-amber-500">Book Your Table</span>
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full h-12 bg-transparent border border-gray-400 px-4 rounded-md focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full h-12 bg-transparent border border-gray-400 px-4 rounded-md focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="w-full h-12 bg-transparent border border-gray-400 px-4 rounded-md focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">
                Reservation Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-12 bg-transparent border border-gray-400 px-4 rounded-md focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full h-12 bg-[#141414] border border-gray-400 px-4 rounded-md focus:border-amber-500"
              >
                <option value="">Select Time</option>
                {timeslot().map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-400">Guests</label>
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="w-full h-12 bg-[#141414] border border-gray-400 px-4 rounded-md focus:border-amber-500"
              >
                <option value="">Select Guests</option>
                {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                  <option key={num} value={num}>
                    {num} Guests
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-amber-600 text-black font-semibold py-4 rounded-md hover:bg-amber-500 transition-all tracking-widest"
              >
                BOOK A TABLE
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="lg:col-span-1 bg-[#101010]/80 backdrop-blur-xl p-10 rounded-2xl border border-gray-400 flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Address</h3>
            <p className="text-gray-400">123 Main Street, Sample City</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">+1 (555) 987-6543</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-400">Mon–Fri: 12 PM – 10 PM</p>
            <p className="text-gray-400">Sat–Sun: 11 AM – 11 PM</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Stay Connected
            </h3>
            <div className="flex gap-6 text-gray-400">
              <FaFacebook size={22} className="hover:text-amber-500 cursor-pointer" />
              <FaTwitter size={22} className="hover:text-amber-500 cursor-pointer" />
              <FaInstagram size={22} className="hover:text-amber-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
