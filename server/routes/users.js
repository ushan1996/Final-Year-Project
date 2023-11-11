import express from "express";
import {  deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyTocken } from "../verifyTocken.js";
 const router = express.Router();
    //Update User
    router.put("/:id", verifyTocken ,update);
    //Delete User
    router.delete("/:id", verifyTocken , deleteUser);
    //Get a User 
    router.get("/find/:id", getUser);
    //Subscribe a user
    router.put("/sub/:id",verifyTocken, subscribe);
    //Unsubscribe a user
    router.put("/unsub/:id",verifyTocken, unsubscribe);
    //Like 
    router.put("/like/:videoId",verifyTocken, like);
    //Dislike
    router.put("/dislike/:videoId",verifyTocken, dislike);
 export default router;