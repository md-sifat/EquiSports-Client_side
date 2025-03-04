import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import PropTypes from "prop-types";



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

const EquipmentD = () => {
  const { id } = useParams();
  console.log(id);
  const { equipments } = useContext(authContext);
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`http://localhost:5000/equipments/${id}`);
        if (!response.ok) {
          throw new Error("Equipment not found");
        }
        const data = await response.json();
        console.log(data);
        setEquipment(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchEquipment();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }


  if (!equipment) {
    return <h2 className="text-center text-red-600 mt-10">Equipment Not Found</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-lg border border-gray-700">
      <img
        src={equipment.image || "https://via.placeholder.com/500x300?text=No+Image+Available"}
        alt={equipment.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold text-gray-900 mt-4">{equipment.name}</h2>
      <p className="text-gray-400 mt-2">{equipment.category} • {equipment.manufacturer}</p>
      <StarRating rating={equipment.rating} />

      <p className="text-gray-300 mt-4">{equipment.description}</p>
      <p className="text-gray-400 mt-2"><strong>Location:</strong> {equipment.location}</p>
      <p className="text-gray-400 mt-2"><strong>Price:</strong> {equipment.price}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-400 font-semibold">{equipment.price}</span>
        <span className="text-sm text-gray-500">{equipment.duration}</span>
      </div>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default EquipmentD;
