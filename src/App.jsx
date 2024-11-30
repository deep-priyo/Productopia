import React from 'react'

const App = () => {
    return (
        <div className="h-screen w-screen ">
            <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
                <a className="py-3 px-5 border border-blue-100 rounded text-blue-300
                " href="/create">Add new Product</a>
                <hr className="w-[80%] my-3"/>
                <h1 className="text-2xl  mb-3 w-[80%]">Category Filter</h1>
                <ul className="  w-[80%]">
                    <li className="mb-3 flex items-center">
                        <span className=" w-[15px] h-[15px] mr-2  bg-blue-100 rounded-full"></span>Cat 1
                    </li>
                    <li className="mb-3 flex items-center">
                        <span className=" w-[15px] h-[15px] mr-2  bg-red-100 rounded-full"></span>Cat 2
                    </li>
                    <li className="mb-3 flex items-center">
                        <span className=" w-[15px] h-[15px] mr-2  bg-green-100 rounded-full"></span>Cat 3
                    </li>
                    <li className="mb-3 flex items-center">
                        <span className=" w-[15px] h-[15px] mr-2  bg-amber-100 rounded-full"></span>Cat 4                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default App
