import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import {Link, Routes, Route} from 'react-router-dom';
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminOrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";



export default function AdminPage(){

  const [userValidated, setUserValidated] = useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      window.location.href = "/login"; //go back to login
    }
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((res)=>{
      console.log(res.data);
      const user = res.data;
      console.log("User response:", res.data);

      if(user.role == "admin"){
        setUserValidated(true);        
      }else{
        window.location.href = "/";
      }
      
    }).catch((err)=>{
      console.error(err);
      setUserValidated(false);
    })
  },[])

    return(
        <div className='w-full h-screen flex'>
        <div className='w-[200px] h-full bg-green-200'>
          <button className='w-full h-[40px] text-[25px] font-bold flex  justify-center items-center      '>
          <GoGraph />
  
            Dashboard
          </button>
  
          <Link to='/admin/orders' className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center       '>             
          <FaRegBookmark />
  
            Orders
          </Link>
  
          <Link to='/admin/items' className='w-full h-[40px] text-[25px] font-bold    flex justify-center items-center   '>
            <MdOutlineSpeaker/>
          Items
          </Link>
          <Link className='w-full h-[40px] text-[25px] font-bold    flex justify-center items-center   ' to='/admin/users'>
          <FaRegUser/>
            Users
          </Link>
  
        </div>
        <div className="w-[calc(100vw-200px)]">
          {userValidated&&<Routes path="/*">
            <Route path="/orders" element={<AdminOrdersPage/>}/>
            <Route path="/users" element={<AdminUsersPage/>}/>
            <Route path="/items" element={<AdminItemsPage/>}/>
            <Route path="/items/add" element={<AddItemPage/>}/>
            <Route path="/items/edit" element={<UpdateItemPage/>}/>
          </Routes>}
  
        </div>
        
      </div>
    )
}