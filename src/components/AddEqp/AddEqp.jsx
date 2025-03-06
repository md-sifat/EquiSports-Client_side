import { useState, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider"; // Assuming this is the context where the user is stored
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEqp = () => {
    const { user } = useContext(authContext);
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [customization, setCustomization] = useState("");
    const [processingTime, setProcessingTime] = useState("");
    const [stockStatus, setStockStatus] = useState("");
    const navigate = useNavigate();

    const handleAddEqp = (event) => {
        event.preventDefault();

        const equipmentData = {
            image,
            itemName,
            category,
            description,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            userEmail: user.email,
            userName: user.displayName,
        };

        // Post the data to the backend (assuming you have a route /add-equipment)
        fetch("https://equi-sports-server-side-beryl.vercel.app/equipments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipmentData),
        })
            .then((response) => response.json())
            .then((data) => { 
                toast.success("Equipment added successfully!");
                navigate("/addEqp"); 
            })
            .catch((error) => {
                toast.error("Failed to add equipment!");
            });
    };

    return (
        <div className="flex w-full md:w-[50%] lg:w-[40%] my-5 justify-center items-center h-auto rounded-xl p-6 bg-gray-900 shadow-xl">
            <div className="w-full bg-transparent p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
                    Add New Equipment
                </h2>
                <form onSubmit={handleAddEqp} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Item Name</label>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter the item name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                        >
                            <option value="">Select Category</option>
                            <option value="Sports">Sports</option>
                            <option value="Music">Music</option>
                            <option value="Fitness">Fitness</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter a description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter the price"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Rating</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                        >
                            <option value="">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Customization</label>
                        <input
                            type="text"
                            value={customization}
                            onChange={(e) => setCustomization(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter customization options"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Processing Time</label>
                        <input
                            type="text"
                            value={processingTime}
                            onChange={(e) => setProcessingTime(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter delivery time"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Stock Status</label>
                        <select
                            value={stockStatus}
                            onChange={(e) => setStockStatus(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                        >
                            <option value="">Select Stock Status</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">User Email</label>
                        <input
                            type="text"
                            value={user.email}
                            readOnly
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl bg-gray-800 text-white cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">User Name</label>
                        <input
                            type="text"
                            value={user.displayName}
                            readOnly
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl bg-gray-800 text-white cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="mt-1 w-full p-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-800 text-white"
                            placeholder="Enter the image URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium p-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Add Equipment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEqp;
