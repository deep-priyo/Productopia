import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Details from "./Components/Details.jsx";

const App = () => {
    return (
        <div className="h-screen w-screen flex ">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/details/:id" element={<Details/>} />
            </Routes>

        </div>

    )
}
export default App
