import express from "express";
import { signIn,signUp,checkToken } from "../Controller/auth.handler.js";

const router = express.Router();
router.post('/signin',signIn)
router.post('/signup',signUp)
router.get('/check',checkToken)

export default router;