import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MobileNavPanel from "./mobileNavPanel";

export default function Header() {
	const [navPanelOpen, setNavPanelOpen] = useState(false);
    const token = localStorage.getItem("token")
	return (
		<header className="w-full fixed h-[70px] shadow-xl flex justify-center items-center bg-accent text-white z-50">
			
			<img
				src="public\logo.jpg"
				alt="logo"
				className="w-[60px] h-[60px] object-cover border-[3px] absolute left-1 rounded-full"
			/>
			<div className="hidden w-[400px]  md:flex justify-evenly items-center font-bold text-lg">
				<Link to="/" className="hidden md:block text-[22px]  m-1">
					Home
				</Link>
				<Link to="/contact" className="hidden md:block text-[22px]  m-1">
					Contact
				</Link>
				
				{/* items */}
				<Link to="/items" className="hidden md:block text-[22px]  m-1">
					Items
				</Link>
				<Link to="/profile" className="hidden md:block text-[22px]  m-1">
					Profile
				</Link>
				<Link
					to="/booking"
					className="hidden md:block text-[22px] font-bold m-1 absolute right-24"
				>
					<FaCartShopping />
				</Link>
			</div>
			<GiHamburgerMenu
				className="absolute right-5 text-[24px] md:hidden"
				onClick={() => {
					setNavPanelOpen(true);
				}}
			/>

      {token!=null&&<button className="hidden md:block absolute right-5 text-[24px] font-bold text-lg" onClick={()=>{
        localStorage.removeItem("token")
        window.location.href = "/login"
      }}>
        logout
      </button>}
			<MobileNavPanel isOpen={navPanelOpen} setOpen={setNavPanelOpen} />
		</header>
	);
}
