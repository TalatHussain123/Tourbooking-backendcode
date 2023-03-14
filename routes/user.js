import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../Utile/verifyToken.js';
const router = express.Router();

//update user
router.put("/:id", verifyUser, updateUser);
//delete user
router.delete("/:id", verifyUser, deleteUser);
//get single user
router.get("/:id", verifyUser, getSingleUser);
//get all user
router.get("/", verifyAdmin, getAllUser);

export default router;