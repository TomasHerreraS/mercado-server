import { Request, Response } from 'express';
import {Md5} from 'ts-md5';
import jwt from 'jsonwebtoken';
import pool from '../database';

export const createUser = async(req: Request, res: Response) => {
  const { name, lastname, rol, email, password, phone, address } = req.body;
  const response = await pool.query('INSERT INTO users ("name", "lastname", "rol", "email", "password", "phone", "address") VALUES ($1, $2, $3, $4, $5, $6, $7)',
  [name, lastname, rol, email, Md5.hashStr(password), phone, address])
  res.json({name, lastname, email, phone, address})
  return response;
}


export const signIn = async(req: Request, res: Response) => {
  const secret_key = process.env.SECRET_TOKEN
  const email = req.query.email;
  const password = req.query.password; // TODO: ARREGLAR ESTO POR FAVOR
  const response = await pool.query('SELECT * FROM users WHERE "email" = $1 and "password" = $2',
  [email, password])
  const data = response.rows;
  data.map((obj) => {
    const token: string = jwt.sign({ id_user: obj.cod_user, name: obj.name, rol: obj.rol}, secret_key || '')
    res.json(token);
  })
  return response.rows;
}


export const getUser = async(req: Request, res: Response) => {
  const response = await pool.query('SELECT * FROM users');
  console.log(response.rows);
  res.json(response.rows);
  return response;
}