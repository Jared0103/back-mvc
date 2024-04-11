const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
<<<<<<< HEAD
const { createUser, findUserByEmail } = require('../services/userService')
=======
const { createUser, findUserByEmail } = require('../services/userServices')
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd

exports.signup = async (req, res) => {
    try {
        // Codigo para registrarse
<<<<<<< HEAD
        const { email, password, id } = req.body
=======
        const { email, password } = req.body
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd
        const existingUser = await findUserByEmail(email)
        if (existingUser.success) {
            return res.status(400).json({
                message: 'El usuario ya esta registrado'
            })
        }

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newUser = {
            email: email,
<<<<<<< HEAD
            password: hashedPassword,
            id: id
=======
            password: hashedPassword
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd
            //agregar otros campos
        }

        const userResult = await createUser(newUser)
        if (userResult.success) {
            res.status(201).json({
                message: 'Usuario registrado satisfactoriamente'
            })
        } else {
            res.status(500).json({
                message: 'Error al registrar usuario'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        // Codigo para loggearnos
        const { email, password } = req.body
        const findEmail = await findUserByEmail(email)

        if (!findEmail.success) {
<<<<<<< HEAD
            return res.status(401).json({
=======
            res.status(401).json({
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd
                message: 'Usuario no encontrado'
            })
        }
        const user = findEmail.user
        const findPassword = await bcrypt.compare(password, user.password)

<<<<<<< HEAD
        if (!findPassword) {
            return res.status(401).json({
=======
        if (!findPassword.success) {
            res.status(401).json({
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd
                message: 'Password incorrecto'
            })
        }

        const token = jsonwebtoken.sign({
            email: user.email,
            userId: user.id
        }, process.env.TOP_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({
            token: token
        })
    } catch (error) {
<<<<<<< HEAD
        return res.status(500).json({
=======
        res.status(500).json({
>>>>>>> 02123bc41b1b946e6e294e420844391f75a6edbd
            message: error.message
        })
    }
}