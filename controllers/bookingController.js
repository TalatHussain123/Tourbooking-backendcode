import Booking from '../models/Booking.js';


//createnew
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true, message: "You are Booked!",
            data: savedBooking
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: "Internel Server Error"
        })
    }
}


//get Single
export const getBooking = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true, message: "Sucessfull!",
            data: book
        })
    } catch (err) {
        res.status(404).json({
            success: false, message: "Not Found!"
        })
    }
}

//get all
export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find()
        res.status(200).json({
            success: true, message: "Sucessfull!",
            data: books
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: "server error"
        })
    }
}