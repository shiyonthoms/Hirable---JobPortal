import { useEffect, useState } from "react";

const JobCard = ({ jobs }) => {
  if (!jobs || jobs.length === 0) return <p>No jobs posted yet.</p>;
  const [deleted, setDeleted] = useState(false)

  const deletejob = async (id) => {
    const response = await fetch(`http://localhost:3000/jobs/recruiter/job/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data); 
    setDeleted(!deleted)
  }

  useEffect(() => {console.log("deleted")}, [deleted])
  return (
    <div className="flex flex-col gap-3">
      {jobs.map((job) => (
        <div key={job.id} className="bg-gray-800 p-3 rounded-md text-white">
          <h2 className="font-bold text-lg">{job.jobTitle}</h2>
          <p>{job.companyName}</p>
          <p>{job.description}</p>
          <p>
            {job.location} | {job.salary} | {job.experience} experience
          </p>
          <div className="flex justify-end space-x-5">
            <button className="border-1  p-1 rounded-md bg-blue-500/20 text-white font-semibold cursor-pointer ">Edit</button>
            <button className="border-1  p-1 rounded-md bg-red-500/20 text-white font-semibold cursor-pointer " onClick={() => deletejob(job.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
