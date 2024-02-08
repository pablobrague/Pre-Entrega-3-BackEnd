import dotenv from 'dotenv'
dotenv.config()


// Local
export const PORT = process.env.PORT
export const pm_path = './db/products.json'

// MONGO 
export const MONGODB = process.env.MONGODB

// SECRETS WORDS
export const COOKIE_SECRET = process.env.COOKIE_SECRET
export const SESSION_SECRET = process.env.SESSION_SECRET
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

// Nodemailer
export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASS = process.env.EMAIL_PASS


