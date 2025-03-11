import { Router } from "express";

import { signUp, signIn, signOut } from "../controllers/auth.controler.js";

const authRouter = Router();

// Path: /api/v1/auth/sign-up | Method: POST
authRouter.post("/sign-up", signUp);

// Path: /api/v1/auth/sign-in | Method: POST
authRouter.post("/sign-in", signIn);

// Path: /api/v1/auth/sign-out | Method: POST
authRouter.post("/sign-out", signOut);

export default authRouter;
