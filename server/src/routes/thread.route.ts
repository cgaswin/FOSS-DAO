import { Router } from "express";
import { createThread, getAllThreads,addComment,getThreadById ,voteThread} from "../controllers/thread.controller.js";


const router: Router = Router();

router.route("/thread").post(createThread).get(getAllThreads);
router.route("/thread/:thread_id").get(getThreadById).post(addComment);
router.route("/thread/vote").post(voteThread);




export default router;
