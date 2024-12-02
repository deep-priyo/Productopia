import React, { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [showCelebration, setShowCelebration] = useState(false);

    const AddProductHandler = (e) => {
        e.preventDefault();
        const product = { title, description, image, price, category };
        console.log(product);

        // Clear the form
        setTitle("");
        setDescription("");
        setImage("");
        setPrice("");
        setCategory("");

        // Show celebration animation
        setShowCelebration(true);

        // Hide celebration after 2 seconds
        setTimeout(() => {
            setShowCelebration(false);
        }, 2000);
    };

    return (
        <form
            onSubmit={AddProductHandler}
            className="flex flex-col items-center p-6 max-w-[600px] w-full mx-auto relative animate-fadeIn bg-transparent rounded-lg "
        >
            <h1 className="w-full mb-5 text-4xl font-bold text-slate-600 text-center">
                Add New Product
            </h1>

            {/* Title Input */}
            <input
                type="text"
                placeholder="Title"
                className="text-2xl bg-blue-50 rounded-lg p-4 w-full mb-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            {/* Image Input */}
            <input
                type="text"
                placeholder="Image URL"
                className="text-2xl bg-blue-50 rounded-lg p-4 w-full mb-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />

            {/* Price Input */}
            <input
                type="number"
                placeholder="Price"
                className="text-2xl bg-blue-50 rounded-lg p-4 w-full mb-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            {/* Category Input */}
            <input
                type="text"
                placeholder="Category"
                className="text-2xl bg-blue-50 rounded-lg p-4 w-full mb-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />

            {/* Description Textarea */}
            <textarea
                rows="5"
                placeholder="Enter Product Description here..."
                className="text-xl bg-blue-50 rounded-lg p-4 w-full mb-4 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all resize-none"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            {/* Submit Button */}
            <div className="w-full flex justify-center relative">
                <button
                    type="submit"
                    className="py-3 px-6 bg-blue-300 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform transform hover:scale-105"
                >

  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>


                    Add New Product
                </button>

                {showCelebration && (
                    <div
                        className="absolute  text-4xl animate-bounce text-red-400"
                    >
                        New Product Added 🎉
                    </div>
                )}
            </div>
        </form>
    );
};

export default Create;
