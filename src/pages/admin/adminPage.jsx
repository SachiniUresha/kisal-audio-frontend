import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminBookingPage";
import DashboardPage from "./dashboard";

export default function AdminPage() {
  const location = useLocation(); // Get current path

  
  const getLinkClasses = (path) =>
    `w-full py-3 flex items-center gap-4 justify-center font-bold rounded transition-all duration-300
     ${location.pathname === path
        ? 'bg-white text-blue-800 text-2xl'
        : 'text-white text-xl hover:bg-blue-700 hover:text-2xl'}`;

  return (
    <div className="w-full h-screen flex font-sans">
      
      {/* Sidebar */}
      <div className="w-[300px] h-full bg-blue-800 shadow-xl flex flex-col items-center py-6 px-4 space-y-6">

        {/* Logo and Brand */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 shadow-md">
            <img 
              src="/logo.jpg" 
              alt="Logo" 
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition duration-300" 
            />
          </div>
          <p className="mt-3 text-white text-xl font-bold tracking-wide drop-shadow-lg transition-all duration-300 group-hover:scale-105">
            Kisal Audio
          </p>
          <span className="text-sm text-blue-100 font-medium italic opacity-90 mt-1 text-center leading-tight">
            Sound & Light Equipments<br /> Online Store
          </span>
        </div>

        {/* Navigation */}
        <Link to="/admin" className={getLinkClasses("/admin")}>
          <GoGraph className="text-2xl" />
          Dashboard
        </Link>

        <Link to="/admin/orders" className={getLinkClasses("/admin/orders")}>
          <FaRegBookmark className="text-2xl" />
          Orders
        </Link>

        <Link to="/admin/items" className={getLinkClasses("/admin/items")}>
          <MdOutlineSpeaker className="text-2xl" />
          Items
        </Link>

        <Link to="/admin/users" className={getLinkClasses("/admin/users")}>
          <FaRegUser className="text-2xl" />
          Users
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Routes path="/*">
          <Route path="/" element={<DashboardPage />} />
          <Route path="/orders" element={<AdminOrdersPage />} />
          <Route path="/users" element={<AdminUsersPage />} />
          <Route path="/items" element={<AdminItemsPage />} />
          <Route path="/items/add" element={<AddItemPage />} />
          <Route path="/items/edit" element={<UpdateItemPage />} />
        </Routes>
      </div>
    </div>
  );
}
