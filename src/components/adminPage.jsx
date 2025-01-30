import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import {Routes, Route} from 'react-router-dom';




export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
        <div className='w-[300px] h-full bg-green-200'>
          <button className='w-full h-[40px] text-[25px] font-bold flex  justify-center items-center      '>
          <GoGraph />
  
            Dashboard
          </button>
  
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center       '>             
          <FaRegBookmark />
  
            Bookings
          </button>
  
          <button className='w-full h-[40px] text-[25px] font-bold    flex justify-center items-center   '>
            <MdOutlineSpeaker/>
          Items
          </button>
          <button className='w-full h-[40px] text-[25px] font-bold    flex justify-center items-center   '>
          <FaRegUser/>
            Users
          </button>
  
        </div>
        <div className="w-[calc(100vw-400px)] bg-red-900">
          <Routes path="/*">
            <Route path="/bookings" element={<h1>Bookings</h1>}/>

          </Routes>
  
        </div>
        
      </div>
    )
}