import reservationModels from "../models/reservationModels.js";

export const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, numberOfGuests } = req.body;

    if (!name || !email || !phone || !date || !time || !numberOfGuests) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newReservation = new reservationModels({
      name,
      email,
      phone,
      date,
      time,
      numberOfGuests: Number(numberOfGuests), // ✅ FIX
    });

    await newReservation.save();

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      data: newReservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllReservation = async (req, res) => {
  try {
    const reservations = await reservationModels
      .find()
      .sort({ createdAt: -1 });

    res.json({ success: true, data: reservations });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await reservationModels.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.json({
      success: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
