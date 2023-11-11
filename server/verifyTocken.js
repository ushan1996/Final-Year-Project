//Check cookies is Avalable or Avalabale cookie is valid
import jwt from "jsonwebtoken";
import {createError} from "./error.js"
export const verifyTocken = (req, res, next) =>{
    const token = req.cookies.access_tocken;
    if(!token) return next(createError(401,"You are not Authenticated !"));
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403,"Tocken is not valid !"));
        req.user = user;
        next();
    });
};