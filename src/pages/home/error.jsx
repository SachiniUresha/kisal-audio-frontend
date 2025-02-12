import {Link} from "react-router-dom"
export default function ErrorNotFound(){

    return(
        <>
            <h1>Error</h1>
            <Link to="/" className="bg-[rgb(34,238,64)] p-5 ">back to home</Link>
        </>
    )
}