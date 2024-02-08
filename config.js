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


//DATOS ARCHIVO .ENV

// Local
//PORT =8080

// MONGO 
//MONGODB =mongodb+srv://pablobrague:12345@cluster0.aqqnq4x.mongodb.net/?retryWrites=true&w=majority

// SECRETS WORDS
// COOKIE_SECRET =cookiesecret
// SESSION_SECRET =SecretCoder
// JWT_PRIVATE_KEY =jwtsecret

// Gmail Services 
//EMAIL_USER=braguepablo@gmail.com
//EMAIL_PASS=hobo zomc tjpf nkjt

