import { Router } from "express";
import {
	createProposal,
	getAllProposals,
	voteProposal,
	getProposalById
} from "../controllers/propsal.controller.js";

const router: Router = Router();

router.route("/").post(createProposal).get(getAllProposals);
router.route("/vote").post(voteProposal);
router.route("/:id").get(getProposalById);

