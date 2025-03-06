import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EqpList = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("https://equi-sports-server-side-beryl.vercel.app/equipments")
            .then((response) => response.json())
            .then((data) => setEquipments(data))
            .catch((error) => console.error("Error fetching equipments:", error));
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this equipment?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`https://equi-sports-server-side-beryl.vercel.app/equipments/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setEquipments(equipments.filter((item) => item._id !== id));
            } else {
                console.error("Failed to delete equipment");
            }
        } catch (error) {
            console.error("Error deleting equipment:", error);
        }
    };

    return (
        <div className="flex w-full justify-center py-10 bg-gray-900">
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Equipment List</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {equipments.map((equipment) => (
                        <div key={equipment._id} className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-600">
                            <h3 className="text-lg font-semibold text-white">{equipment.itemName}</h3>
                            <p className="text-gray-400 text-sm">Category: {equipment.category}</p>
                            <p className="text-gray-300 text-sm">{equipment.description}</p>
                            <div className="flex gap-4 mt-4">
                                <Link
                                    to={`/update-equipment/${equipment._id}`}
                                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                                >
                                    Update
                                    
                                </Link>
                                <button
                                    onClick={() => handleDelete(equipment._id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EqpList;
