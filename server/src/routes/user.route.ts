import { Router } from "express";
import {
	createUser,
	getUserByUsername,
	getUserByWalletAddress,
	getAccessToken,
	getGithubUserData
} from "../controllers/user.controller.js";

const router: Router = Router();

router.route("/user").post(createUser);
router.route("/user/:username").get(getUserByUsername);
router.route("/wallet/:walletAddress").get(getUserByWalletAddress);
router.route("/access-token").get(getAccessToken);
router.route("/github").get(getGithubUserData);

export default router;
