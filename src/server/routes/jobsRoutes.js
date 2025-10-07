import express from "express"
import { PrismaClient } from '../../generated/prisma/index.js'

const router = express.Router();
const prisma = new PrismaClient();


router.post('/create', async (req, res) => {
  try{
    const { recruiterId, companyName, jobTitle, description, location, salary, experience } = req.body;
    const job = await prisma.jobs.create({
      data: {
        recruiterId,
        companyName,
        jobTitle,
        description,
        location,
        salary,
        experience,
      },
    })
    res.status(201).json({ message: "Job posted successfully", job });
  } catch (err) {
    console.error("Job creation error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});


router.get('/recruiter/:id', async(req, res) => {
  try{
    const {id} = req.params
    const jobs = await prisma.jobs.findMany({
    where:
    {recruiterId : parseInt(id)},
    orderBy: {createdAt: 'desc'}
  })
  res.status(200).json({jobs})
  }catch(err){
    console.log("error fetching data", err)
    res.status(500).json({message: "somethings wrong"})
  }
  
})

router.delete ('/recruiter/job/:id', async (req, res) => {
  const {id} = req.params
  const job = await prisma.jobs.delete({
    where:{
      id: parseInt(id)
    }
  })
  res.status(200).json({message: "Job deleted successfully", job})

})


router.get('/all', async(req, res) => {
  const data = await prisma.jobs.findMany({
    orderBy: {createdAt: 'desc'}
  })
  res.status(200).json({data})
})

export default router
