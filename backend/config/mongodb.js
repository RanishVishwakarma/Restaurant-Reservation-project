import mongoose from 'mongoose';



const connectToDatabase = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/menu`);
}
export default connectToDatabase;