import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Service from "./Components/Service.jsx";
import MenuDisplay from "./Components/MenuDisplay.jsx";
import ReservationForm from "./Components/ReservationForm.jsx";
import Footer from "./Components/Footer.jsx";
import { ToastContainer } from "react-toastify";

export const backendUrl = "http://localhost:4000";

const App = () => {
  return (
    <div>
      <ToastContainer />

      <div id="home">
        <Hero />
        <Service />
      </div>

      <div id="menu">
        <MenuDisplay />
      </div>

      <div id="reservation">
        <ReservationForm />
      </div>

      <Footer />
    </div>
  );
};

export default App;
