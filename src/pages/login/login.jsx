import axios from "axios";
import "./login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin(
    {
      onSuccess : (res)=>{
        console.log(res)
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/google`,{
          accessToken : res.access_token
        }).then((res)=>{
          console.log(res)
          toast.success("Login Success")
          const user = res.data.user
          localStorage.setItem("token",res.data.token)
          if(user.role === "admin"){
            navigate("/admin/")
          }else{
            navigate("/")
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  )

  function handleOnSubmit(e){
    e.preventDefault()
    console.log(email , password);
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    axios.post(`${backendUrl}/api/users/login`,
      {
        email : email,
        password : password
      }
    ).then((res)=>{

      console.log(res)
      toast.success("Login Success")
      const user = res.data.user
      localStorage.setItem("token",res.data.token)
      
      if(user.emailVerified === false){
        navigate("/verify-email")
        return;
      }
      
      if(user.role === "admin"){
        navigate("/admin/")
      }else{
        navigate("/")
      }
      

    }).catch((err)=>{
      console.log(err)
      toast.error(err.response.data.error)
    })

  }

  return (
    <div className="bg-picture w-full h-screen flex flex-col items-center text-white ">
      <div className=" w-full h-screen  flex justify-center items-center">
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[500px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
           <h2 className="text-white text-3xl font-bold text-center mb-6">
          Sign In
        </h2>
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-[100px] h-[100px] object-cover "
          />  

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          

          <input
            type="password"
            name="user_password"
            placeholder="Password"
            autoComplete="off"
            className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div className="text-white text-sm my-2 mt-4">Are you new to Kisal-Audio? <Link to="/register" className="text-orange-400 font-semibold">
            Register Here
          </Link>
          </div>



          <button className="my-2 w-[300px] h-[40px] bg-[#efac38] text-xl text-white rounded-lg">
            Login
          </button>
          <button className="my-2 w-[300px] h-[40px] bg-[#efac38] text-xl text-white rounded-lg " onClick={googleLogin}>

            Login with Google

            
          </button>
        </div>
      </form>
      
    </div>
    <p class>
        Kisal-Audio | All Rights Reserved | Designed by Sachini Weerakkody
      </p>
    </div>
  );
}
