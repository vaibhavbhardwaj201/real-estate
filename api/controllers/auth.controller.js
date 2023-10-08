import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const {username, email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = User({username, email,password: hashedPassword})
    try {
        await newUser.save()
        res.status(201).json("user created")
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}