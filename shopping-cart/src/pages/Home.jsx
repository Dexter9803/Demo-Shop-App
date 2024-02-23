import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false)
  const [posts, setposts] = useState([])

  async function fetchProductData() {
    setloading(true)
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setposts(data)
    }
    catch(error)
    {
      console.log("Error alaaa")
      setposts([])
    }
    setloading(false)
  }

  useEffect( () => {
    fetchProductData();
  },[])


  return (
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (<div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => {
                return <Product key={posts.id} post={post}/>
            })
          }
        </div>) : 
        <div className="flex justify-center items-center ">
          <p>No data found</p>
        </div>
      }
    </div>
  );
};

export default Home;
