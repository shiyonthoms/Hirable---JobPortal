import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs/all");
        const data = await response.json();
        setJobs(data.jobs);
        
      } catch (error) {
        console.error("Error fetching jobs:", error);
        
      }
    };

    if (user) {
      fetchJobs();
    }
  }, [user]);

  if (!user) return <p>Loading...</p>;

  console.log(data)

  return (
    <div>
      <h1>hello</h1>
      {jobs.map((job) => (
        <div key={job.id} className="bg-gray-800 p-3 rounded-md text-white">
          <h2 className="font-bold text-lg">{job.jobTitle}</h2>
          <p>{job.companyName}</p>
          <p>{job.description}</p>
          <p>
            {job.location} | {job.salary} | {job.experience} experience
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
