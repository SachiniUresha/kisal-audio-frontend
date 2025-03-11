import { CiCirclePlus } from "react-icons/ci";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";



export default function AdminItemsPage(){

    const [items, setItems] = useState([]);
    const [itemsLoaded, setItemsLoaded] = useState(false);

    useEffect(()=>{

        if(!itemsLoaded){
            const token = localStorage.getItem("token");
            axios.get("http://localhost:3000/api/products/getProducts", {
                headers:{ Authorization: `Bearer ${token}` },
            }).then(
                (res)=>{
                console.log(res.data);
                setItems(res.data);
                setItemsLoaded(true);
             
            }).catch(
                (err)=>{
                console.error(err);
            })
        }

   
    }, [itemsLoaded]);
    
    
    return(
        <div className="w-full h-full bg-red-100 relaive">
            <table>
                <thead>
                    <tr>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((product, index)=> {
                            console.log(product);
                            return(
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability?"Available" : "Not Available"}</td>
                                </tr>
                            )
                        })
                    }
                    
                   


                    
                </tbody>
            </table>
<Link to="/admin/items/add">
<CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900 hover:text-[300px] cursor-pointer" />
</Link>

        </div>
    )
}