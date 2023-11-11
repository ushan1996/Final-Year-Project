import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, Search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyTocken } from "../verifyTocken.js";
 const router = express.Router();
 //Create a New Video
 router.post("/",verifyTocken,addVideo);
 //Update Video
 router.put("/:id",verifyTocken,updateVideo);
 //Delete Video
 router.delete("/:id",verifyTocken,deleteVideo);
 //Get a Video
 router.get("/find/:id",getVideo);
 //views
 router.put("/view/id",addView);
 //Tranding Videos
 router.get("/trend",trend);
 //Random videos for home page
 router.get("/random",random);
 //Subcribers
 router.get("/sub",verifyTocken ,sub);
//search videos tags & Titles
 router.get("/tags" ,getByTag);
 router.get("/search" ,Search);
 export default router;