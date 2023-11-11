import { createError } from "../error.js";
import Video from "../models/Video.js";
import User from "../models/User.js";
//addVideo
export const addVideo = async (req, res, next)=>{
    const newVideo = new Video({userId: req.user.id, ...req.body});
     try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    }catch(err){next(err);}
};
//updateVideo
export const updateVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404,"Video not found ..!"));
        if(req.user.id === video.userId){
            const updateVideo = await Video.findByIdAndUpdate(req.params.id,{$set: req.body },{new: true});
            res.status(200).json(updateVideo);
        }else{
            return next(createError(403,"You can update only your videos..!"));
        }
        
    }catch(err){next(err);}
};
//deleteVideo
export const deleteVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404,"Video not found ..!"));
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("The Video has been deleted");
        }else{
            return next(createError(403,"You can delete only your videos..!"));
        }
        
    }catch(err){next(err);}
};
//getVideo
export const getVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);
        res.status(200).json(video);    
    }catch(err){next(err);}
};
//addView
export const addView = async (req, res, next)=>{
    try{
        await Video.findByIdAndUpdate(req.params.id,{$inc:{views:1}});
        res.status(200).json("The views has been increased .");    
    }catch(err){next(err);}
};
//trend
export const trend = async (req, res, next)=>{
    try{
        //views:-1 most views video
        //views:1 less views video
        const videos = await Video.find().sort({views:-1});
        res.status(200).json(videos);    
    }catch(err){next(err);}
};
//random
export const random = async (req, res, next)=>{
    try{
        const videos = await Video.aggregate([{ $sample: {size: 40}}]);
        res.status(200).json(videos);    
    }catch(err){next(err);}
};
//sub
export const sub = async (req, res, next)=>{
    try{
        const user = await User.findById(req.user.id);
        const subscribedUsers = user.subscribedUsers;
        const list = await Promise.all(
            subscribedUsers.map((channelId) =>{
                return Video.find({userId: channelId});
            })
        );
        res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt));
    }catch(err){next(err);}
};
export const getByTag = async (req, res, next)=>{
    const tags = req.query.tags.split(",");
    try{
        const videos = await Video.find({tags : { $in: tags }}).limit(20);
        res.status(200).json(videos);    
    }catch(err){next(err);}
};
export const Search = async (req, res, next)=>{
    const query = req.query.q;
    try{
        const videos = await Video.find({title: { $regex: query , $options: "i"}}).limit(40);
        res.status(200).json(videos);    
    }catch(err){next(err);}
}
