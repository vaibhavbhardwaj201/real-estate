import express from 'express'
import { signup, signin } from '../controllers/auth.controller.js'

const router = express.Router()

// Route for sign up api
router.post('/signup', signup)

// Route for sign in api
router.post('/signin', signin)

export default router