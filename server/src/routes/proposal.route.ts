import { Router } from "express";
import {
	createProposal,
	getAllUnvotedProposals,
	voteProposal,
	getProposalById,
	getOverview,
	getProposalsByOwner,
	verifyProposal,
	findUnverifiedProposals
} from "../controllers/propsal.controller.js";

const router: Router = Router();

router.route("/").post(createProposal).get(getAllUnvotedProposals);
router.route("/vote").post(voteProposal);
router.route("/overview").get(getOverview);
router.route("/proposal/:id").get(getProposalById);
router.route("/owner/:owner").get(getProposalsByOwner);
router.route("/verify").post(verifyProposal);
router.route("/unverified").get(findUnverifiedProposals);

export default router

