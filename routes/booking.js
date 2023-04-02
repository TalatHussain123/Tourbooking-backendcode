import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
import { verifyUser } from '../Utile/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.post('/:id', verifyUser, getBooking);
router.post('/', verifyUser, getAllBooking);

export default router;