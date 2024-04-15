import { Router } from "express";
import {
	createUser,
	getUserByUsername,
	getUserByWalletAddress,
} from "../controllers/user.controller.js";

const router: Router = Router();

router.route("/user").post(createUser);
router.route("/user/:username").get(getUserByUsername);
router.route("/wallet/:walletAddress").get(getUserByWalletAddress);

export default router;
