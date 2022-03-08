const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { UserModel } = require('../models')

router.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        // get user by email
        const oldUser = await UserModel.findOne({ email })

        // if the email is not found, then return 404 with error msg: user not found
        if (!oldUser) {
            return res.status(404).json({
                message: `User not found with email ${email}`,
            })
        }

        // compare password with database hashed password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            oldUser.password
        )

        console.log(isPasswordCorrect)

        if (!isPasswordCorrect) {
            // return 400 with message wrong password
            return res.status(400).json({ message: 'Bad credentials' })
        }

        // if password correct, sign a token
        const token = jwt.sign(
            {
                email: oldUser.email,
                id: oldUser._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            }
        )

        // set the token to res
        res.status(200).json({
            token,
            result: {
                id: oldUser._id,
                email,
            },
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
