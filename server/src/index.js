import express from 'express'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import cors from 'cors'
import { isAuthenticated } from './middleware'
import { findSourceMap } from 'module'
const app = express()

const JWT_SECRET = "JWT_SECRET"
const port = 8001
const userId = crypto.randomBytes(16).toString('base64')

app.use(express.json())
app.use(cors())


app.get('/userData', isAuthenticated ,async(req,res)=>{
    try {
        
        // mkkae request to the DB
        const userID = req.user

        console.log(userID)
        // findById(userId)
        return {
            data:{}
        }


    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const isAuthenticated = true
        if (isAuthenticated) {
            // get user from the DB
            const user = {
                email:'kartik@gmail.com',
                userId,
                firstName:"kartik",
                lastName:'gupta'
            }
            const token = await jwt.sign({
                userId,
            }, JWT_SECRET)

            return res.json({
                user,
                token
            })
        }
        return res.json({
            user:null,
            token:null
        })

    } catch (error) {
        console.log(error)
        res.json({ error: error.message })
    }
})

app.get("/", async (req, res) => {
    res.send("listening")
})

app.listen(port, () => {
    console.log(`listening at port : ${port}`)
})

