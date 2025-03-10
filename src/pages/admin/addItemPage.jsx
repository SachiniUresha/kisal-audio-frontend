import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddItemPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("0");
  const [productCategory, setProductCategory] = useState("Audio");
  const [productDimensions, setProductDimension] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate =useNavigate();

  async function handleAddItem(){
    console.log(productKey, productName, productPrice, productCategory, productDimensions, productDescription);
    const token = localStorage.getItem("token");

    if(token){

        try{
       
        //toast.success("Item Added")
        const result = await axios.post("http://localhost:3000/api/products/addProduct",
            {
                key:productKey,
                name:productName,
                price:productPrice,
                dimensions:productDimensions,
                description:productDescription
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
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>
      <div className="w-[400px] border p-4 rounded-lg shadow flex flex-col gap-4">
        <input
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
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleAddItem} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add
        </button>
        <button onClick={()=>{ navigate("/admin/items")}} className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Cancel
        </button>

      </div>
    </div>
  );
}
