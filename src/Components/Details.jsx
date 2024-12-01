import React from 'react'
import {Link} from "react-router-dom";

const Details = () => {
    return (
        <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]   ">
            <img
                 className="object-contain h-[80%] w-[45%]"
                 src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                 alt="Product Image"
            />
            <div className="content  w-[50%]">
                <h1 className="text-4xl">
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h1>
                <h3 className="text-zinc-400 my-5 ">Men's clothing</h3>
                <h2 className="text-red-200 mb-3">Rs 109.95</h2>
                <p className="mb-5">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>

                <Link className="py-2 px-5 border rounded text-blue-400 border-blue-200 mr-3 hover:bg-blue-100 hover:text-blue-600" >Edit</Link>
                <Link className="py-2 px-5 border rounded text-red-400 border-red-200 mr-3 hover:bg-red-100 hover:text-red-600">Delete</Link>
            </div>
        </div>
    )
}
export default Details
