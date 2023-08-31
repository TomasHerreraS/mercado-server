import { Request, Response } from 'express';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import pool from '../database';

const createUser = async(req: Request, res: Response) => {
  const { name, lastname, rol, email, password, number, address } = req.body;
  const response = await pool.query('INSERT INTO users ("name", "lastname", "rol", "email", "password", "number", "address") VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [name, lastname, rol, email, md5(password), number, address])
  res.json(response.rows);
  return response;
}

export default createUser;