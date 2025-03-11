const sampleArray = [
    {
      key: "prod001",
      name: "12V Car Battery NS40ZL",
      price: 85.99,
      category: "Automotive",
      dimensions: "197mm x 129mm x 227mm",
      description: "Reliable 12V car battery suitable for most compact vehicles.",
      availability: true,
      image: [
        "https://example.com/images/ns40zl-front.jpg",
        "https://example.com/images/ns40zl-side.jpg"
      ]
    },
    {
      key: "prod002",
      name: "Deep Cycle Battery 100Ah",
      price: 220.5,
      category: "Marine",
      dimensions: "330mm x 173mm x 240mm",
      description: "Ideal for marine and RV use with long-lasting deep cycle power.",
      availability: true,
      image: [
        "https://example.com/images/deepcycle100ah-front.jpg",
        "https://example.com/images/deepcycle100ah-side.jpg"
      ]
    },
    {
      key: "prod003",
      name: "Motorcycle Battery YTX7A-BS",
      price: 45.0,
      category: "Motorcycle",
      dimensions: "150mm x 87mm x 93mm",
      description: "High-performance battery for scooters and motorcycles.",
      availability: false,
      image: [
        "https://example.com/images/ytx7abs-front.jpg"
      ]
    },
    {
      key: "prod004",
      name: "AGM Battery 12V 70Ah",
      price: 150.75,
      category: "Automotive",
      dimensions: "278mm x 175mm x 190mm",
      description: "Maintenance-free AGM battery suitable for various car models.",
      availability: true,
      image: [
        "https://example.com/images/agm70ah-front.jpg",
        "https://example.com/images/agm70ah-top.jpg"
      ]
    },
    {
      key: "prod005",
      name: "Solar Battery 150Ah Tubular",
      price: 275.0,
      category: "Solar",
      dimensions: "505mm x 190mm x 410mm",
      description: "High-capacity tubular battery for solar power backup systems.",
      availability: true,
      image: [
        "https://example.com/images/solar150ah.jpg"
      ]
    }
  ];


  import { CiCirclePlus } from "react-icons/ci";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";



export default function AdminItemsPage(){

    const [items, setItems] = useState(sampleArray);
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