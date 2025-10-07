import { data, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import RoleSelector from "../components/RoleSelector";


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [signup, setSignUp] = useState(false);
  const [role, setRole] = useState("");
  let Profilerole;

  const navigate = useNavigate();



  const loginsubmit = async(e) => {
    
    e.preventDefault();

    if (signup){
      const response = await fetch('http://localhost:3000/auth/signup',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email, 
        password,
        role
      })
    })
      const data  = await response.json()
      console.log(data)
      setPassword('')
      if (response.status === 201){
      setMessage("user created successfully. Please login to continue")
      
      }else{
        setMessage("something went wrong, Please Try again later")
      }
    } else {
      const response = await fetch('http://localhost:3000/auth/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email, 
        password,
      })
    })
      const data  = await response.json()
      Profilerole = data.user.acc_type;
      console.log(data)
      setPassword('')
      if (response.status === 200){
        localStorage.setItem("user", JSON.stringify(data.user));
        Profilerole === "employee" ? navigate("/profile") : navigate("/RecruiterProfile")
      }else{
        setMessage("email id or password is incorrect. Please try again")
      }
    }
    }
     
  
  

  return (
    <div className="container max-auto border-white backdrop-blur-md h-screen w-full flex justify-center items-center">
      <div className="bg-gray-100/10 md:rounded-3xl w-full h-full md:w-[90%] md:h-[90%] flex">
      <div className=" hidden md:flex w-[40%] justify-center items-center flex-col gap-2">
        <h1 className="text-5xl text-white font-bold">Hirable.</h1>
        <h1 className="text-md text-white font-bold">Hire. Get hired. Be Hirable.</h1>
      </div>
      <div className="w-full md:w-[60%] bg-gray-900/40 flex justify-center items-center flex-col gap-2">
      {signup ? (<h1 className="text-3xl text-white font-bold">Sign Up</h1>) : (<h1 className="text-3xl text-white font-bold">Login</h1>)}
      <form className="flex flex-col w-[90%]" onSubmit={loginsubmit}>
        <label className="text-white font-bold text-start">Email</label>
        <input className="border-none ring-1 ring-white rounded-md p-2 mb-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label className="text-white font-bold text-start">Password</label>
        <input className="border-none ring-1 ring-white rounded-md p-2 mb-5" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div>
        {signup && (<RoleSelector role={role} setRole={setRole}/>)}
        <button className="border-none ring-1 p-3 cursor-pointer bg-blue-500/60 text-md text-white rounded-md font-bold w-[30%]">{signup ? "Sign Up" : "login"}</button>
        </div>
        <h1 className="mt-2">{message}</h1>
      </form>
      <div className="flex gap-2 pt-3">
        {signup ? "Login to your account" : "Don't have an account?"}
        
        <button className="text-blue-200 text-md font-bold hover:text-blue-300 cursor-pointer" onClick={() => setSignUp(!signup)}>{signup ? "Login" : "Sign Up"}</button>
      </div>
      <div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AuthPage