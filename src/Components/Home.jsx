import React, {useContext} from 'react'
import Nav from "./Nav.jsx";
import {Link} from "react-router-dom";
import {ProductContext} from "../Utils/Context.jsx";
import Loading from "./Loading.jsx";

const Home = () => {
    const [products]= useContext(ProductContext);
    console.log(products);
    return ( products? (
        <>

            <Nav/>
            <div className=" w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {products.map((product) => (

                    <Link to={"/details/" + product.id}
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
