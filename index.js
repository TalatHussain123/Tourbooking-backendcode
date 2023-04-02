import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from "./routes/tour.js";
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/review.js';
import bookingRoute from './routes/booking.js';

dotenv.config();
export const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  Credentials: true
}
//DataBase
mongoose.set('strictQuery', false)
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connected DB")
  } catch (err) {
    console.log("Error")
  }
}

//middle wire
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

app.listen(port, () => {
  connect();
  console.log("Back server is running on:", port)
})