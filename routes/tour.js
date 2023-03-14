import express from "express";
import { createTour, deleteTour, getAllTour, getCountTour, getFeatureTour, getSingleTour, getTourBysearch, updateTour }
    from "../controllers/tourController.js";
import { verifyAdmin } from '../Utile/verifyToken.js';

const router = express.Router()
//create new tour
router.post("/", verifyAdmin, createTour);
//update tour
router.put("/:id", verifyAdmin, updateTour);
//delete tour
router.delete("/:id", verifyAdmin, deleteTour);
//get single tour
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBysearch", getTourBysearch);
//get tour by feature
router.get("/search/getTourByFeature", getFeatureTour);
//get tour count
router.get("/search/getcounttour", getCountTour);

export default router;
