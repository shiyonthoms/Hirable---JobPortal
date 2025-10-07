import { useState, useEffect } from "react" 
import JobCard from "../components/JobCard";
const RecruiterPofilePage = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser)

    const [postCreate, setPostCreate] = useState(true);
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [experience, setExperience] = useState("");
    const [job, setJob] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await fetch (`http://localhost:3000/jobs/recruiter/${storedUser.id}`)
                const data = await response.json()
                setJob(data.jobs)

            }catch(err){
                console.log("error fetching jobs", err)
            }
        } 
        fetchJobs()
    }, [postCreate])

    const posthidden  = postCreate ? 'hidden' : ''

    const jobsubmit = async(e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3000/jobs/create',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                recruiterId: storedUser.id,
                companyName: company,
                jobTitle: title,
                description,
                location,
                salary,
                experience,
            })
        })
        const data = await response.json()
        console.log(data)
        setCompany('')
        setTitle('')
        setDescription('')
        setLocation('')
        setSalary('')
        setExperience('')
        setPostCreate(false)
        setPostCreate(!postCreate)
    }


  return (
    <div className="container max-auto border-white backdrop-blur-md w-full flex flex-col md:flex-row pt-2">
        <div className="bg-gray-900/50 w-full  relative">
        <div className="w-full  flex justify-end pr-5 items-center">
            <button className="p-2 font-bold cursor-pointer  bg-blue-500/90 rounded-md text-white" onClick={() => setPostCreate(!postCreate)}>create a post +</button>
        </div>
        <div
          className={`${posthidden} absolute w-full  border-red-500 bg-black`}
        >
        <form className="flex flex-col gap-2 p-5" onSubmit={jobsubmit}>
            <label className="text-start font-bold">Company Name</label>
            <input className="border-none ring-1 p-1 rounded-md "type="text" onChange={(e) => setCompany(e.target.value)} value={company} required/>
             <label className="text-start font-bold">Job Title</label>
            <input className="border-none ring-1 p-1 rounded-md"type="text" onChange={(e) => setTitle(e.target.value)} value={title} required/>
            <label className="text-start font-bold">Job Description</label>
            <input className="border-none ring-1 p-1 rounded-md"type="text" onChange={(e) => setDescription(e.target.value)} value={description} required/>
            <label className="text-start font-bold">Location</label>
            <input className="border-none ring-1 p-1 rounded-md"type="text" onChange={(e) => setLocation(e.target.value)} value={location} required/>
            <label className="text-start font-bold">Salary</label>
            <input className="border-none ring-1 p-1 rounded-md"type="text"
            onChange={(e) => setSalary(e.target.value)} value={salary} required/>
            <label className="text-start font-bold">Experience required</label>
            <input className="border-none ring-1 p-1 rounded-md"type="text" 
            onChange={(e) => setExperience(e.target.value)} value={experience} required/>
            <div className="pt-5">
                <button className="p-2 font-bold cursor-pointer bg-blue-500/90 rounded-md text-white w-60">Submit</button>
            </div>
            
        </form>
        </div>
        <div className="pt-10 pl-10 pr-10">
            <h1 className="text-xl font-bold text-start">Your job postings</h1>
            <div className="">
                <JobCard jobs={job} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default RecruiterPofilePage