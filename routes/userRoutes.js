import express from 'express';
const router = express.Router();
import {userRegistration, userLogin, sendUserPasswordResetEmail, userPasswordReset,changeUserPassword, loggedUser} from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

// Public Routes
router.post('/register', userRegistration)
router.post('/login', userLogin)
router.post('/send-reset-password-email', sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', userPasswordReset)

// Protected Routes
router.post('/changepassword', checkUserAuth, changeUserPassword)
router.get('/loggeduser', checkUserAuth, loggedUser)


export default router