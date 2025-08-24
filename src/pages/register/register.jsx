import axios from "axios";
import "./register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegisterPage(){   //need validtions

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

  
    const handleOnSubmit = (e)=>{
    
        e.preventDefault();
        console.log("submitted");
        console.log({firstName, lastName, email, password, address, phone});
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            address:address,
            phone:phone
        }).then(()=>{
            toast.success("Registration Success");
            navigate("/login");
        }).catch((err)=>{
        console.log(err);
        toast.error(err?.response?.data?.error||"An error occured");
    })
};
    

    return(
            <div className="bg-picture w-full h-screen flex flex-col items-center text-white ">

        <div className="w-full h-screen flex flex-col items-center justify-center ">
            <form onSubmit={handleOnSubmit} autoComplete="off">
            <div className="w-[400px] h-[520px] backdrop-blur-xl relative rounded-2xl flex flex-col items-center justify-center">
                 <h2 className="text-white text-2xl font-bold text-center mb-2 mt-0">
          Sign Up
        </h2>
            <img src="/logo.jpg" alt="logo" className="w-[60px] h-[60px] object-cover top-1 my-2 mt-1" />

                <input type="text" placeholder="First Name" className="w-[300px] h-[30px] mt-0 bg-transparent border-b-2 border-white text-white text-lg outline-none" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" className="w-[300px] h-[30px] mt-5  bg-transparent border-b-2 border-white text-white text-lg outline-none" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type="text" placeholder="Email" className="w-[300px] h-[30px] mt-5 bg-transparent border-b-2 border-white text-white text-lg outline-none" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-5 bg-transparent border-b-2 border-white text-white text-lg outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" placeholder="Address" className="w-[300px] h-[30px] mt-5 bg-transparent border-b-2 border-white text-white text-lg outline-none" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder="Phone" className="w-[300px] h-[30px] mt-5 bg-transparent border-b-2 border-white text-white text-lg outline-none" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                <div className="text-white text-sm my-2 mt-4">Already have an account? <Link to="/login" className="text-orange-400 font-semibold">
            Login Here
          </Link>
          </div>

                <button type="submit" className="text-xl mt-2 border-2 rounded-lg w-[300px] h-[40px] text-black bg-yellow-400 font-bold">Register</button>

            </div>
            </form>


        </div>
        <p className="text-white text-sm mt-2">
        Kisal-Audio | All Rights Reserved | Designed by Sachini Weerakkody
      </p>
    </div>
    )
}

