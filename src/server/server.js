import express from 'express'
import { PrismaClient } from '../generated/prisma/index.js'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import jobRoutes from './routes/jobsRoutes.js'


const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
const prisma = new PrismaClient()


app.use('/auth', authRoutes)
app.use('/jobs', jobRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})