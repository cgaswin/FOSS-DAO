import { Router } from "express";
import {
	createProposal,
	getAllProposals,
	voteProposal,
	getProposalById,
	getOverview
} from "../controllers/propsal.controller.js";

const router: Router = Router();

router.route("/").post(createProposal).get(getAllProposals);
router.route("/vote").post(voteProposal);
router.route("/overview").get(getOverview);
router.route("/:id").get(getProposalById);

export default router

