import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { backendUrl } from "../App";

const Admintable = () => {
  const [reservations, setReservations] = useState([]);
  const token = localStorage.getItem("token");

  const fetchReservations = async () => {
    try {
      const response = await axios(
        `${backendUrl}/api/reservations/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setReservations(response.data.data);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReservation = async (id) => {
    try {
      await axios.delete(
        `${backendUrl}/api/reservations/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchReservations();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-7xl bg-[#0f0f0f]/90 backdrop-blur
        border border-amber-700 rounded-2xl shadow-2xl
        p-4 sm:p-6 lg:p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center border-b border-amber-700 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-amber-400">
            Reservations
          </h2>
          <p className="text-sm text-gray-400">
            Admin Reservation Management
          </p>
        </div>

        {/* Table Head (desktop) */}
        <div
          className="hidden md:grid grid-cols-7 gap-4
          text-amber-400 font-semibold border-b border-amber-700 pb-2"
        >
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Date</span>
          <span>Time</span>
          <span>Guests</span>
          <span>Action</span>
        </div>

        {/* Rows */}
        {reservations.length === 0 ? (
          <p className="text-center text-gray-500 py-6">
            No reservations found
          </p>
        ) : (
          reservations.map((item) => (
            <div
              key={item._id}
              className="
              grid grid-cols-1 md:grid-cols-7 gap-4
              p-4 md:p-0
              border border-gray-800 md:border-0
              rounded-xl md:rounded-none
              hover:bg-black/40 transition"
            >
              {/* Name */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Name</p>
                <p className="text-gray-200">{item.name}</p>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Email</p>
                <p className="text-gray-400 break-all">{item.email}</p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Phone</p>
                <p className="text-gray-400">{item.phone}</p>
              </div>

              {/* Date */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Date</p>
                <p className="text-gray-200">{item.date}</p>
              </div>

              {/* Time */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Time</p>
                <p className="text-gray-200">{item.time}</p>
              </div>

              {/* Guests */}
              <div>
                <p className="text-xs text-gray-400 md:hidden">Guests</p>
                <p className="text-amber-400 font-semibold">
                  {item.numberOfGuests}
                </p>
              </div>

              {/* Action */}
              <div className="flex md:justify-start">
                <button
                  onClick={() => deleteReservation(item._id)}
                  className="flex items-center gap-2
                  text-red-500 hover:text-red-600 transition"
                >
                  <MdDeleteSweep size={30} />
                  <span className="text-sm md:hidden">Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admintable;
