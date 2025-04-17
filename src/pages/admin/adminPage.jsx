import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import {Link, Routes, Route} from 'react-router-dom';
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";




export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
        <div className='w-[200px] h-full bg-green-200'>
          <button className='w-full h-[40px] text-[25px] font-bold flex  justify-center items-center      '>
          <GoGraph />
  
            Dashboard
          </button>
  
          <Link to='/admin/bookings' className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center       '>             
          <FaRegBookmark />
  
            Bookings
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
          <Routes path="/*">
            <Route path="/bookings" element={<h1>Bookings</h1>}/>
            <Route path="/users" element={<AdminUsersPage/>}/>
            <Route path="/items" element={<AdminItemsPage/>}/>
            <Route path="/items/add" element={<AddItemPage/>}/>
            <Route path="/items/edit" element={<UpdateItemPage/>}/>
          </Routes>
  
        </div>
        
      </div>
    )
}