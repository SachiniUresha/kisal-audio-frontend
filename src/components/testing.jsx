import { useState } from "react"
import mediaUpload from "../utils/mediaUpload";

export default function Testing(){

    const [file, setFile] = useState(null);

    function UploadFile(){
        console.log(file.name);
        mediaUpload(file).then((url)=>{
            console.log(url)
        })
    }




    return(
        <div className="w-full flex flex-col justify-center items-center h-screen">

            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />
            <button onClick={UploadFile} className="w-[200px] h-[50px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition ">Upload</button>
            
        </div>
    )
}