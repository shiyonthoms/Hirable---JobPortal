import express from "express"
import { PrismaClient } from '../../generated/prisma/index.js'

const router = express.Router();
const prisma = new PrismaClient();


router.post('/login', async (req, res) => {
  try{
    const {email, password} = req.body
    const user = await prisma.user_auth.findFirst({
      where:{
        AND:{
          email,
          password
        }
      }
    })
    if(!user){
      res.status(400).json({message: "User not found"})
    }else{
      res.status(200).json({message: "User found", user})
    }
  }catch(err){
    res.status(500).json({message: "Something went wrong"})
  }
})


router.post('/signup', async (req, res) => {
  try {
    
    const {email, password, role} = req.body

    if(!email || !password || !role){
      return res.status(400).json({message:"All fields are required"})
    }

    const user = await prisma.user_auth.create({
      data:{
        email,
        password,
        acc_type: role,
      }
    })
    res.status(201).json({message: "User created successfully", user})
  }catch (err){
    console.log('sign up error', err)
    res.status(500).json({message: "Something went wrong"})
  }
  
})

export default router