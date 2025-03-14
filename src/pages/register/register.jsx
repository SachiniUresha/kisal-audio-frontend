import axios from "axios";
import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegisterPage(){

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
        <div className="bg-picture w-full h-screen flex flex-col items-center justify-center ">
            <form onSubmit={handleOnSubmit} autoComplete="off">
            <div className="w-[400px] h-[600px] backdrop-blur-xl relative rounded-2xl flex flex-col items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute top-1" />

                <input type="text" placeholder="First Name" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" className="w-[300px] h-[30px] mt-6  bg-transparent border-b-2 border-white text-white text-xl outline-none" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input type="text" placeholder="Email" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" placeholder="Address" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder="Phone" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                <button type="submit" className="text-xl mt-12 border-2 rounded-l w-[300px] h-[50px] text-white bg-[#efac38]">Register</button>

            </div>
            </form>


        </div>
    )
}

