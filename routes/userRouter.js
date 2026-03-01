import express from 'express';
import { createUser, loginWithGoogle } from '../controllers/userController.js';
import { getUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';
import { sendOTP } from '../controllers/userController.js';
import { resetPassword } from '../controllers/userController.js';
import { getAllUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.post('/login', loginUser);
userRouter.post("/login/google", loginWithGoogle);
userRouter.post("/send-otp", sendOTP);
userRouter.post("/reset-password", resetPassword);
userRouter.get('/all', getAllUsers);
userRouter.get('/', getUser);

export default userRouter;