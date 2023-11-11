import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyTocken } from "../verifyTocken.js";
 const router = express.Router();
//Create New Comment
 router.post("/",verifyTocken,addComment);
//Delete Comment
 router.delete("/:id",verifyTocken,deleteComment);
//Get Comments
 router.get("/:videoId",getComments);
 export default router;