import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id))
    toast.error("Item removed from cart")
  }

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-105 transition-all duration-200  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className=" h-[180px] ">
        <img src={post.image} className="h-full w-full "></img>
      </div>

      
        <div className="flex justify-between items-center w-full  mt-5">
          <p className="text-green-600 font-semibold">{post.price}</p>
        
          {
            cart.some((p) => p.id == post.id) ?
            <button
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
              onClick={removeFromCart}
            >Remove Item</button> :
            <button
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
              onClick={addToCart}
            >Add to Cart</button>
          }  
        </div>
      </div>
      
    
  );
};

export default Product;
