import express from 'express';
import { googleAuth, signin, signup } from '../controllers/auth.js';
const router = express.Router();
//Create New User
router.post('/signup', signup);
//Sign In to the Account
router.post('/signin', signin);
//Google Authndication & sign in
router.post('/google', googleAuth);
export default router;
