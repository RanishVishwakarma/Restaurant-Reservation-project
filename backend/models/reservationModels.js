import mongoose from 'mongoose';
const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    numberOfGuests: { type: Number, required: true },
  },
  { timestamps: true }
);


export default mongoose.model('Reservation', reservationSchema);