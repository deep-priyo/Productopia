import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "../Utils/Axios.jsx";
import {data} from "autoprefixer";
import Loading from "./Loading.jsx";


const Details = () => {
    const navigate = useNavigate();
    const gobackHandler=()=>{navigate(-1);}
    const [product, setProduct] = useState(null)
    const {id}=useParams();
    const getsingleproduct =async () => {
        try{
            const{data}=await axios.get(`/products/${id}`);
            setProduct(data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getsingleproduct();
    },[])
    return ( product?(
            <>


                <div className="w-[80%] flex h-full justify-between items-center m-auto p-[10%]   ">
                    <button onClick={gobackHandler}
                            className="absolute w-8 h-8 rounded-full top-[20%] right-[20%] flex justify-center items-center">
                        <img src="/src/assets/img.png" alt=""/>
                    </button>
                    <img
                        className="object-contain h-[80%] w-[45%]"
                        src={product.image}
                        alt="Product Image"
                    />
                    <div className="content  w-[50%]">

                        <h1 className="text-4xl">
                            {product.title}
                        </h1>
                        <h3 className="text-zinc-400 my-5 ">{product.category}</h3>
                        <h2 className="text-red-300 mb-3">Rs. {((product.price) * 83)}</h2>
                        <p className="mb-5">{product.description}</p>

                        <Link
                            className="py-2 px-5 border rounded text-blue-400 border-blue-200 mr-3 hover:bg-blue-100 hover:text-blue-600">Edit</Link>
                        <Link
                            className="py-2 px-5 border rounded text-red-400 border-red-200 mr-3 hover:bg-red-100 hover:text-red-600">Delete</Link>
                    </div>
                </div>
            </>) : <Loading/>
    )
}
export default Details
