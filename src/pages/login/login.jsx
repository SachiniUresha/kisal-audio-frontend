

import axios from "axios";
import "./login.css";
import {useState} from "react";


export default function LoginPage(){

     

    const[email, setEmail] = useState("");
    
    const[password, setPassword] = useState("");

    
    function handleOnSubmit(e){
        console.log("submitted");

        e.preventDefault();
        console.log("submitted");
        console.log(email, password);

        axios.post("https://localhost:3000/api/users/login" , 
        {
            email:email,
            password:password
        }
    ).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

        

    }


    return(
        <div className="bg-picture w-full h-screen flex justify-center items-center">

            <form onSubmit={handleOnSubmit}>

            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative">

                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute top-1" />

                    <input type="email" placeholder="Email" className="mt-6 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none" value={email} onChange={
                    (e)=>{
                    setEmail(e.target.value)}} />
                    <input type="password" placeholder="Password" className="mt-6 w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none" value={password} onChange={
                    (e)=>{
                    setPassword(e.target.value)}}/>
                    
                    <button type="submit" className="my-8 w-[300px] h-[50px] bg-[#efac38] text-xl text-white rounded-lg "> Login </button>

            </div>

            </form>


        </div>
    )
}