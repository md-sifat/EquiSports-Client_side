import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EqpUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [equipment, setEquipment] = useState({
        itemName: "",
        category: "",
        description: "",
        price: "",
        processingTime: "",
        image: "",
    });

    useEffect(() => {
        fetch(`https://equi-sports-server-side-beryl.vercel.app/equipments/${id}`)
            .then((response) => response.json())
            .then((data) => setEquipment(data))
            .catch((error) => toast.error("Error fetching equipment details!"));
    }, [id]);

    const handleChange = (e) => {
        setEquipment({ ...equipment, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://equi-sports-server-side-beryl.vercel.app/equipments/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(equipment),
            });

            if (response.ok) {
                toast.success("Equipment updated successfully!");
                setTimeout(() => navigate("/equipments"), 2000); // Redirect after success
            } else {
                toast.error("Failed to update equipment!");
            }
        } catch (error) {
            toast.error("Error updating equipment!");
        }
    };

    return (
        <div className="flex justify-center py-10 bg-gray-900">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Update Equipment</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        name="itemName"
                        value={equipment.itemName}
                        onChange={handleChange}
                        placeholder="Equipment Name"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        value={equipment.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                        required
                    />
                    <textarea
                        name="description"
                        value={equipment.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={equipment.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                        required
                    />
                    <input
                        type="text"
                        name="processingTime"
                        value={equipment.processingTime}
                        onChange={handleChange}
                        placeholder="Processing Time"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        value={equipment.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                    >
                        Update Equipment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EqpUpdate;
