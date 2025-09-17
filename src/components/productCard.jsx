/* import {Link} from "react-router-dom"

export default function ProductCard(props){

    const item = props.item;


    return(

        <div className="w-[200px] h-[400px] rounded-xl border-2 m-5 p-3">
<img
          src={item.image?.[0]}
          alt={item.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        {!item.availability && (
          <span className=" top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Out of Stock
          </span>
        )}
           
           <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-500 mb-1 capitalize">{item.category}</p>
        <p className="text-base font-medium text-gray-700">Rs.{item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">Dimensions: {item.dimensions}</p>
        <br />
        <Link to={"/product/"+item.key} className="w-[100px] h-[40px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 text-center">
        View Details
        </Link>
        
          

    
            
        </div>
    )

} */

import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden m-4 relative mt-20">
      <img
        src={item.image[0]}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{item.category}</p>
        <div className=" text-sm text-gray-600">
        </div>

        <p className="text-gray-700 mt-4">{/* {item.description} */}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-green-500 my-4 mt-0">Rs. {item.price} </span>
          <span
            className={`px-3 py-1 text-sm rounded-full my-4 mt-0 ${
              item.availability ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {item.availability ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        
      </div>
      <div className=" flex justify-end h-full p-4 border-t border-gray-200 tm-[10px]">
        <Link  to={"/product/"+item.key} className="text-center w-[90%] h-[40px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 absolute mx-auto  bottom-3">
          View Details
        </Link>
      </div>
    </div>
  );
}
