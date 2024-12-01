import React, {createContext, useEffect, useState} from 'react';
import axios from "./Axios.jsx";

export const ProductContext = createContext();

const Context = (props) => {
    const [product, setProduct] = useState(null);

    const getproduct = async () => {
        try {
            const { data } = await axios("/products");
            console.log(data);
            setProduct(data); // Update state with fetched data
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
