import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


export default function UpdateItemPage() {

    const location = useLocation();
    console.log(location);

  const [productKey, setProductKey] = useState("location.state.key");
  const [productName, setProductName] = useState("location.state.name");
  const [productPrice, setProductPrice] = useState("location.state.price");
  const [productCategory, setProductCategory] = useState("location.state.category");
  const [productDimensions, setProductDimension] = useState("location.state.dimensions");
  const [productDescription, setProductDescription] = useState("location.state.description");
  const [productImages, setProductImages] = useState([]);
  const navigate =useNavigate();

  async function handleUpdateItem(){

    let updatingImages = location.state.image;

    if(productImages.length>0){
       
      const promises = [];

      for(let i=0; i<productImages.length;i++){
        console.log(productImages[i])
        const promise = mediaUpload(productImages[i])
        promises.push(promise)
        if(i==5){
          toast.error("You can only upload 5 images at a time")
          break;
        }
      }

      updatingImages=await Promise.all(promises);

    }

    console.log(productKey, productName, productPrice, productCategory, productDimensions, productDescription);
    const token = localStorage.getItem("token");

    if(token){

        try{
       
        //toast.success("Item Added")
        const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/updateProduct/${productKey}`,
            {
                key:productKey,
                name:productName,
                price:productPrice,
                dimensions:productDimensions,
                description:productDescription,
                image:updatingImages
            },{
                headers: {
                    Authorization:"Bearer " + token
                }
            }

        )
       toast.success(result.data.message)   
        navigate("/admin/items");
    }catch(err){
        console.log(err);
        toast.error(err.response.data.error);
    }
       
    }else{
        toast.error("You are not authorized to add items")
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Update Items</h1>
      <div className="w-[400px] border p-4 rounded-lg shadow flex flex-col gap-4">
        <input
            disabled
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Audio">Audio</option>
          <option value="Lights">Lights</option>
        </select>
        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setProductDimension(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 rounded"
        />
         <input type="file" multiple 
          onChange={(e)=>{setProductImages(e.target.files)}}  
          className="w-full p-2 border rounded" 
        />
        <button onClick={handleUpdateItem} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Update
        </button>
        <button onClick={()=>{ navigate("/admin/items")}} className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Cancel
        </button>

      </div>
    </div>
  );
}
