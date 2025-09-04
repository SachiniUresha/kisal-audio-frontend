/*import axios from "axios";
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



          <button className="my-2 w-[300px] h-[40px] bg-yellow-400 text-xl text-black rounded-lg font-bold border-2">
            Login
          </button>
          <button className="my-2 w-[300px] h-[40px] bg-yellow-400 text-xl text-black font-bold rounded-lg border-2" onClick={googleLogin}>

            Login with Google

            
          </button>
        </div>
      </form>
      
    </div>
    <p className="text-white text-sm mt-2">
        Kisal-Audio | All Rights Reserved | Designed by Sachini Weerakkody
      </p>
    </div>
  );
}*/

import "./login.css";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently } = useAuth0();

  // Sync Auth0 user with backend
  useEffect(() => {
    const syncAuth0User = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently({
            audience: import.meta.env.VITE_AUTH0_AUDIENCE, // must match backend API Identifier
          scope: "openid profile email"
          });
          localStorage.setItem("token", token);

          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/auth0`, {
            name: user.name,
            email: user.email,
            picture: user.picture,
          },{
            headers: { Authorization: `Bearer ${token}` }
          });

          toast.success("Login Success with Auth0");
          navigate("/");
        } catch (err) {
          console.error("Auth0 sync failed:", err);
        }
      }
    };

    syncAuth0User();
  }, [isAuthenticated, user, getAccessTokenSilently, navigate]);

  // Normal login
  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, { email, password })
      .then((res) => {
        toast.success("Login Success");
        const user = res.data.user;
        localStorage.setItem("token", res.data.token);

        if (!user.emailVerified) {
          navigate("/verify-email");
          return;
        }

        navigate(user.role === "admin" ? "/admin/" : "/");
      })
      .catch((err) => toast.error(err.response?.data?.error || "Login failed"));
  }

  return (
    <div className="bg-picture w-full h-screen flex flex-col items-center text-white">
      <div className="w-full h-screen flex justify-center items-center">
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <div className="w-[400px] h-[500px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">
            <h2 className="text-white text-3xl font-bold text-center mb-6">Sign In</h2>
            <img src="/logo.jpg" alt="logo" className="w-[100px] h-[100px] object-cover" />
            
            <input type="email" placeholder="Email" className="mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={password} onChange={e => setPassword(e.target.value)} />

            <div className="text-white text-sm my-2 mt-4">
              Are you new to Kisal-Audio? <Link to="/register" className="text-orange-400 font-semibold">Register Here</Link>
            </div>

            <button type="submit" className="my-2 w-[300px] h-[40px] bg-yellow-400 text-xl text-black rounded-lg font-bold border-2">Login</button>

            {/* Auth0 Google login */}
            <button type="button" 
            className="my-2 w-[300px] h-[40px] bg-yellow-400 text-xl text-black font-bold rounded-lg border-2"
              onClick={() => loginWithRedirect({
                authorizationParams: {
                  audience: import.meta.env.VITE_AUTH0_AUDIENCE, // must match backend
                  //response_type: "code",
                  //response_mode: "query",
                  scope: "openid profile email"
                }
              })}>
              Login with Google 
            </button>

            {isAuthenticated && (
              <div className="mt-4 text-center">
                <h3>Hello, {user.name}</h3>
                <img src={user.picture} alt={user.name} className="mx-auto rounded-full mt-2 w-[60px] h-[60px]" />
                <p>{user.email}</p>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="my-2 w-[300px] h-[40px] bg-red-500 text-xl text-white font-bold rounded-lg border-2">Logout</button>
              </div>
            )}
          </div>
        </form>
      </div>

      <p className="text-white text-sm mt-2">Kisal-Audio | All Rights Reserved | Designed by Sachini Weerakkody</p>
    </div>
  );
}
