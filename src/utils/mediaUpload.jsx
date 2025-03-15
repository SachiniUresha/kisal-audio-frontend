import { createClient } from "@supabase/supabase-js";

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Zmt0YWxjemFsZnF3dXZ1cmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMzU3NjIsImV4cCI6MjA1NzYxMTc2Mn0.GLLOqFqaGZ2GhvVbuCt5WdBl6bSpqnc-5xSKDEwswj0";
const supabase_url = "https://qzfktalczalfqwuvurky.supabase.co";

const supabase = createClient(supabase_url, anon_key); //conn with supabase

export default function mediaUpload(file){

    return new Promise((resolve, reject)=>{
        if(file==null){
            reject("No file selected");
            return;
        }

        const timeStamp = new Date().getTime();
        const fileName = timeStamp+file.name;
        
        supabase.storage.from("images").upload(fileName,file, {
            cacheControl:"3600",
            upsert:false,
        })
        .then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            console.log(publicUrl);
            resolve(publicUrl);
        }).catch(()=>{
            reject("Error uploading file")
        })
    
    });

}

  
