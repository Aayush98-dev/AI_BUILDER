import express from 'express';
import { createUserProject, getUserCredits, getUserProject, getUserProjects, purchasecredits, togglePublish } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const userRouter = express.Router();

// userRouter.get('credits',protect , getUserCredits)

userRouter.get('/credits' ,protect, getUserCredits)
userRouter.post('/project', protect, createUserProject)
userRouter.get('/project/:projectId', protect, getUserProject)
userRouter.get('/projects', protect, getUserProjects)
userRouter.get('/publish-toggle/:projectId', protect, togglePublish)
userRouter.post('/purchase-credits', protect, purchasecredits)

export default userRouter