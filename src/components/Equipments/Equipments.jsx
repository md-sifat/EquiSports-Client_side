import { useState, useEffect, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { MdCategory, MdAttachMoney, MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (i - 0.5 === rating) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-300" />);
        }
    }
    return <div className="flex">{stars}</div>;
};

const EquipmentPage = () => {
    const { user } = useContext(authContext);
    const [equipments, setEquipments] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/equipments")
            .then((response) => response.json())
            .then((data) => setEquipments(data))
            .catch((error) => console.error("Error fetching equipments:", error));
    }, []);

    console.log(equipments)

    return (
        <div className="flex w-full justify-center py-10 bg-gray-900">
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Equipment</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {equipments.map((equipment) => (
                        <div key={equipment._id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-600 p-4">
                            <img
                                src={equipment.image || "https://via.placeholder.com/300?text=No+Image"}
                                alt={equipment.itemName}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-white">{equipment.itemName}</h3>
                                <p className="text-sm text-gray-400 flex items-center gap-1">
                                    <MdCategory className="text-blue-500" /> {equipment.category}
                                </p>
                                <p className="text-gray-300 mt-2 text-sm">{equipment.description}</p>
                                <div className="flex justify-between items-center mt-4 text-sm">
                                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                                        <MdAttachMoney className="text-green-600" /> {equipment.price}
                                    </span>
                                    <span className="text-gray-500 flex items-center gap-1">
                                        <MdDateRange className="text-red-500" /> {equipment.processingTime}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <StarRating rating={equipment.rating} />
                                    <Link
                                        to={`/equipments/${equipment._id}`}
                                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EquipmentPage;
