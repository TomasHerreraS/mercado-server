import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import { addUser, signInUser } from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use(addUser);
app.use(signInUser);

app.listen(3001);