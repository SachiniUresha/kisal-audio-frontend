import Header from "../../components/header";
import Footer from "../../components/footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Gallery from "./gallery";
import Items from "./items";
import Home from "./home";
import ErrorNotFound from "./error";
import ProductOverview from "./productOverview";
import BookingPage from "./bookingPage";


export default function HomePage(){
    return(

        <div className="flex flex-col min-h-screen">

            <Header/>

            <div className="w-full flex-grow">

                <Routes path="/*">

                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="/items" element={<Items/>}></Route>
                <Route path="/booking" element={<BookingPage/>}/>
                <Route path="/product/:key" element={<ProductOverview/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<ErrorNotFound/>}></Route>


                </Routes>

        </div>

        <Footer/>

        </div>

    )
}