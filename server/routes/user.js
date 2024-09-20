import express from "express";
import { getUser, getFriends, addRemoveFriends } from "../controllers/user.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

// READ
router.get("/:id", getUser);
router.get("/:id/friends", getFriends);
// UPDATE
router.patch("/:id/:friendId", addRemoveFriends);

export default router;
