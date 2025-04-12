import {Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


export default function Header(){
    return(
        
        <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-accent text-white">

        <img src="logo.png" alt="logo" className="w-[100px] h-[100px] object-cover absolute left-1 border-[3px] rounded-full" />
            
        <Link to="/" className="text-[25px] font-bold m-1">Home</Link>
        
        <Link to="/contacts" className="text-[25px] font-bold m-1">Contact</Link>
        
        <Link to="/gallery" className="text-[25px] font-bold m-1">Gallery</Link>
        
        <Link to="/items" className="text-[25px] font-bold m-1">Items</Link>

        <Link to="/booking" className="text-[25px] font-bold m-1 absolute right-3"><FaShoppingCart/></Link>


        </header>

    )
}