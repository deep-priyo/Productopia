import React, {useContext, useEffect, useState} from 'react'
import Nav from "./Nav.jsx";
import {Link, useLocation} from "react-router-dom";
import {ProductContext} from "../Utils/Context.jsx";
import Loading from "./Loading.jsx";
import axios from "../Utils/Axios.jsx";

const Home = () => {

    const [products]= useContext(ProductContext);
    const {search}=useLocation();
    const category =decodeURIComponent( search.split("=")[1])
    const [filteredProducts, setFilteredProducts] = useState(null)
    const getproductscategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFilteredProducts(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        if(!filteredProducts) setFilteredProducts(products);
        if (category !== "undefined") getproductscategory();
    }, [category,products]);
   console.log(filteredProducts)
    return ( products? (
        <>

            <Nav/>
            <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {filteredProducts && filteredProducts.map((product) => (

                    <Link key={product.id} to={"/details/" + product.id}
                          className="card mr-3 mb-3  p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
                        <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                             style={{backgroundImage: `url(${product.image})`}}></div>
                        <h1 className="hover:text-blue-300">{product.title}</h1>
                    </Link>
                ))}

            </div>
        </>

        ): <Loading color={'#a5a4a3'} type={'bars'}  />
    )
}
export default Home
