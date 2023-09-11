import { Router } from "express";
import { createUser, signIn, getUser } from '../controller/user.controller';

const router = Router();

export const addUser = router.post('/addUser', createUser);
export const signInUser = router.get('/signIn', signIn)
export const getUsers = router.get('/getUser', getUser)