export default function ProductCard(props){

    const item = props.item;


    return(

        <div className="w-[200px] h-[350px] rounded-xl border-2 m-5 p-3">
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
        
          

    
            
        </div>
    )

}