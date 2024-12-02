import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {ProductContext} from "../Utils/Context.jsx";

const Nav = () => {
    const [products]=useContext(ProductContext);
    let distinct_category= products && products.reduce((acc,cv)=>[...acc,cv.category],[])
    distinct_category=[...new Set(distinct_category)]
    const color=()=>{
        return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()}, 0.4)`
    }
    const capitalizeEachWord = (string) => {
        if (!string) return '';
        return string
            .split(' ') // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(' '); // Join the words back into a single string
    };

    return (
        <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
            <a className="py-3 px-5 border border-blue-100 rounded text-blue-300
                " href="/create">Add new Product</a>
            <hr className="w-[80%] my-3"/>
            <h1 className="text-2xl  mb-3 w-[80%]">Category Filter</h1>
            <div className="  w-[80%]">
                {distinct_category.map((c,i)=>(<Link key={i} to={`/?category=${c}`} className="mb-3 flex items-center">
                    <span style={{backgroundColor:color()}} className=" w-[15px] h-[15px] mr-2   rounded-full"></span>{capitalizeEachWord(c)}
                </Link>
                ))}


            </div>
        </nav>
    )
}
export default Nav
