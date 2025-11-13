import { useState } from "react"


const Login = () => {

  const[Currstate,setCurrstate]= useState('Login')
  return (
    <div className="flex  flex-col justify-center items-center mt-28 ">
      <div className="border-[1px] w-[min(400px,90%)] rounded-xl h-[60vh] border-pink-400">
       <div className="flex justify-center">
  <h1 className="font-bold text-3xl text-medium  mt-8 mb-16 ">{Currstate}</h1>


  </div>

<div className="grid grid-cols-1 px-6">
  {Currstate==="Login"?<></>:<input type="text" placeholder="your name" required className="border border-pink-400 outline-pink-400 px-4 py-2 mb-4 rounded-xl" />} 
       <input type="email" placeholder="your email" required  className="border border-pink-400 outline-pink-400 px-4 py-2 mb-4 rounded-xl"/>
       <input type="password" placeholder="password" required  className="border border-pink-400 outline-pink-400 px-4 py-2 mb-4 rounded-xl"/>
  <button className="bg-pink-500 px-4 py-2 mb-4 rounded-xl font-medium text-xl text-white hover:bg-pink-400">{Currstate==="Sign up" ?"Create account":"Login"}</button>
  <div className="flex">
   <input type="checkbox" required className="mb-6"/>
        <p className="">By continuing, i agree to the terms of use and privacy policy.</p>

        
       </div>
<div className="mt-4">

   {Currstate==="Login"
       ?<p className="signup">Create a new account?<span   className="text-pink-500 cursor-pointer" onClick={()=>setCurrstate("sign up")}>Click here</span></p>
       : <p className="signup">Already have an account?<span className="text-pink-500 cursor-pointer" onClick={()=>setCurrstate('Login')}>login here</span></p>
        }
</div>
       
      </div>
</div>




      
      
    </div>
  )
}

export default Login
