const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { UserModel } = require('../models')

router.post('/', async (req, res) => {
    const { email, password} = req.body

    try {
        // find old user with same email

        const oldUser = await UserModel.findOne({email})
        // if email already exist, return 400, user already exist

        if(oldUser) {
            return res.status(400).json({message: 'User already exist'})
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 8)


        // create a new user with email and hashpassword
        const newUser = await UserModel.create({
            email,
            password: hashPassword
        })

        // return new user
        res.status(200).json({
            email,
            id: newUser._id
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// javascript module
// import * from 'axios'

// export default Component / module.exports = Component
// export { asdfasdf } / module.exports = { asdfasdf }


// commonjs
// nodejs
// const a = require()
// module.exports= 
module.exports = router
