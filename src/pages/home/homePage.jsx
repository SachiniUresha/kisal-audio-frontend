import Header from "../../components/header";
import { Route, Routes } from "react-router-dom";
import Contact from "./contacts"
import Gallery from "./gallery"
import Items from "./items"
import Home from "./home"
import ErrorNotFound from "./error";

export default function HomePage(){
    return(

        <>

            <Header/>

            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">

                <Routes path="/*">

                <Route path="/contacts" element={<Contact/>}></Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="/items" element={<Items/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<ErrorNotFound/>}></Route>


                </Routes>

        </div>

        </>
    )
}