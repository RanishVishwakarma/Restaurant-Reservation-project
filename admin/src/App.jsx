import React, { useEffect, useState } from "react";
import Login from "./Components/Login.jsx";
import TopNavbar from "./Components/TopNavbar.jsx";
import AddMenu from "./pages/AddMenu.jsx";
import AdminTable from "./pages/Admintable.jsx";
import ListMenu from "./pages/ListMenu.jsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const backendUrl = "http://localhost:4000";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-black font-serif">
      <ToastContainer position="top-right" theme="dark" />

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Top Navbar */}
          <TopNavbar setToken={setToken} />

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* Header */}
            <header className="mb-8 border-b border-amber-700 pb-4">
              <h1 className="text-3xl font-semibold text-amber-400 tracking-wide">
                Emerald Bistro Admin
              </h1>
              <p className="text-sm text-gray-400">
                Fine Dining · Menu & Reservations Management
              </p>
            </header>

            {/* Page Container */}
            <section className="bg- rounded-2xl shadow-2xl p-6 sm:p-8">
              <Routes>
                
                <Route path="/add" element={<AddMenu token={token} />} />
                <Route path="/list" element={<ListMenu token={token} />} />
                <Route path="/table" element={<AdminTable token={token} />} />
              </Routes>
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
